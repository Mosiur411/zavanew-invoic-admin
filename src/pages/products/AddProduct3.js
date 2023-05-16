import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import DashboardLayout from '../../components/layout/DashboardLayout'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ProductsSchema } from '../../helpers/validation/ProductsSchema';
import { useGetDepartmentQuery } from '../../app/services/department';
import { useQueryCategoriesMutation } from '../../app/services/categories';
import { useQuerySubCategoriesMutation } from '../../app/services/subCategories';
import { useQueryChildSubCategoriesMutation } from '../../app/services/childsubCategories';
import { useRef } from 'react';
import "jodit";
import "jodit/build/jodit.min.css";
import JoditEditor from "jodit-react";
import { useAddProductMutation, useAddbulkProductMutation } from '../../app/services/product';
import { toast } from 'react-toastify';

function AddProduct3() {
    const editor = useRef(null);
    const [sameWord, setSameWord] = useState('')
    const [content, setContent] = useState('');
    const contentFieldChanaged = (data) => {
        setContent(data)
    }
    const specificWordCount = (content.match(new RegExp(sameWord, 'gi')) || []).length;
    /*  product add  */
    const [AddProduct, { isError, isLoading, isSuccess }] = useAddProductMutation()

    /* deparment,category,sub,child =============== handel start */
    const { data } = useGetDepartmentQuery()
    const [QueryCategories, { data: categorieData }] = useQueryCategoriesMutation()
    const [QuerySubCategories, { data: subCategorieData }] = useQuerySubCategoriesMutation()
    const [QueryChildSub, { data: child }] = useQueryChildSubCategoriesMutation()
    const [AddbulkProduct, { isError: bulkisError, isLoading: bulkisLoading, isSuccess: bulkisSuccess }] = useAddbulkProductMutation()
    /*  select Department Query categoties sub child  */
    const selectDepartment = async (id) => {
        await QueryCategories(id)
    }
    const selectCategory = async (id) => {
        await QuerySubCategories(id)
    }
    const selectSubCategory = async (id) => {
        await QueryChildSub(id)
    }
    /* deparment,category,sub,child =============== handel end */

    const [flavior, setFlavior] = useState([{ name: '', image: [] }])
    /* =============================== selling price  hadnel =============================== */
    const [selling, setSelling] = useState()
    const [saleOffer, SetsaleOffer] = useState()
    const [saleOfferType, SetsaleOfferType] = useState()





    /*  image text  */
    const handleChangeText = (index, event) => {
        event.preventDefault();
        const value = event?.target?.value;
        flavior[index].name = value;
    }

    /*  image add   */
    const handleChangeImages = (image, index) => {
        if (image) {
            flavior[index].image = [...image];
        }
    }
    console.log(flavior)
    /*  image hosting   */
    const handleFileChange = (e, index) => {
        const files = e.target.files;
        const uploadedImages = [];
        for (let i = 0; i < files.length; i++) {
            const formData = new FormData();
            const filename = uuidv4();
            formData.append('file', files[i]);
            formData.append('public_id', filename);
            formData.append('upload_preset', 'p36dm5k4');
            axios
                .post('https://api.cloudinary.com/v1_1/retwho/image/upload', formData)
                .then((response) => {
                    uploadedImages.push(response.data.secure_url);
                    if (uploadedImages.length === files.length) {
                        handleChangeImages(uploadedImages, index)
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
    /*  image remove   */
    const Deleteflavior = (index) => {
        setFlavior(flavior => flavior.filter((_, i) => i !== index));
    }
    /*  product submit  */
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(ProductsSchema) });
    const onSubmit = async (data) => {
        const datas = {
            name: data?.name,
            upc: data?.upc,
            upcBox: data?.upcBox,
            sku: data?.sku,
            development_id: data?.development_id,
            categorie_id: data?.categorie_id,
            sub_id: data?.sub_id,
            childSub_id: data?.childSub_id,
            brand_id: data?.brand_id,
            status: data?.status,
            inStock: data?.inStock,
            quantity: data?.quantity,
            images: flavior,
            imagesTitle: data?.imagesTitle,
            imageAlterText: data?.imageAlterText,
            price: [
                { name: 'Saleing_Price', price: data?.Saleing_Price },
                { name: 'xs', price: data?.xs },
                { name: 'sm', price: data?.sm },
                { name: 'md', price: data?.md },
                { name: 'lg', price: data?.lg },
                { name: 'xl', price: data?.xl },
                { name: 'xl_2', price: data?.xl_2 },
                { name: 'xl_3', price: data?.xl_3 },
                { name: 'xl_4 ', price: data?.xl_4 },
                { name: 'xl_5', price: data?.xl_5 },
                { name: 'xl_6', price: data?.xl_6 },
                { name: 'xl_7', price: data?.xl_7 },
            ],
            tag: data?.tag,
            meta_title: data?.meta_title,
            meta_description: data?.meta_description,
            sale: [
                {
                    type: data?.sale_offer_type,
                    offer: data?.sale_offer,
                    amount: data?.sale_offer_price,
                }
            ],
            coupon: [
                {
                    type: data?.coupon_offer_type,
                    offer: data?.coupon_offer,
                    amount: data?.coupon_Offer_amount,
                }
            ],
            promo: [
                {
                    type: data?.promo_offer_type,
                    offer: data?.promo_code,
                    amount: data?.promo_amount,
                }
            ],
            deal: [
                {
                    type: data?.deal_offer_type,
                    offer: data?.deal_time_type,
                    amount: data?.deal_amount,
                }
            ],
            description: content,
        }

        await AddProduct(datas)
    }
    /* Bullk product upload  */
    const handleBullkFileSelect = async (event) => {
        const files = event.target.files;
        const formData = new FormData();
        formData.append('product.csv', files[0])
        await AddbulkProduct(formData)
    };


    useEffect(() => {
        if (isSuccess || bulkisSuccess) {
            toast.success('Child Sub Categories Add !')
        }
        if (isError || bulkisError) {
            toast.error('sorry Child Sub Categories not add!')
        }
    }, [isError, isLoading, isSuccess, bulkisError, bulkisLoading, bulkisSuccess])

    return (
        <DashboardLayout>
            <section className="content-main">
                <div className="row">
                    <div className="col-9">
                        <div className="content-header">
                            <h2 className="content-title">Add New Product </h2>
                            <div>
                                <button className="btn btn-light rounded font-sm mr-5 text-body hover-up">Save to draft</button>
                                <button className="btn btn-md rounded font-sm hover-up"
                                style={{ cursor: bulkisLoading ? 'no-drop' : 'pointer' }}
                                ><label htmlFor='BullkProduct'>Bullk Product</label></button>
                                <input style={{ display: 'none' }} id='BullkProduct' type='file' name="products_csv" accept=".csv, .txt, text/csv, text/plain"
                                    onChange={(event) => handleBullkFileSelect(event)}
                                />
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-lg-12">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="mb-4">
                                        <label htmlFor="product_title" className="form-label">Product Title <span style={{ color: 'red' }}>*</span></label>
                                        <input type="text" placeholder="Product Title" className="form-control" id="product_title" {...register("name")} />
                                        {errors?.name && (
                                            <span className="form__error">{errors?.name.message}</span>
                                        )}
                                    </div>
                                    <div className="row gx-3">
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="product_UPC" className="form-label">UPC (Single)</label>
                                            <input type="text" placeholder="UPC" className="form-control" id="product_UPC"
                                                {...register("upc")}
                                            />
                                            {errors?.upc && (
                                                <span className="form__error">{errors?.upc.message}</span>
                                            )}
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="product_SKU" className="form-label">SKU</label>
                                            <input type="text" placeholder="SKU" className="form-control" id="product_SKU"
                                                {...register("sku")} />
                                            {errors?.sku && (
                                                <span className="form__error">{errors?.sku.message}</span>
                                            )}
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="product_upc_box" className="form-label">UPC (Box) </label>
                                            <input type="text" placeholder="UPC (Box)" className="form-control" id="product_upc_box"
                                                {...register("upcBox")}
                                            />
                                            {errors?.upcBox && (
                                                <span className="form__error">{errors?.upcBox.message}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row gx-3">
                                        <div className="col-md-4 mb-3">
                                            <div className="mb-4">
                                                <label className="form-label">Department <span style={{ color: 'red' }}>*</span></label>
                                                <select className="form-select" {...register("development_id")} onChange={(e) => selectDepartment(e.target.value)}>
                                                    {data?.development?.map(data => <option value={data?._id} key={data?._id}>{data?.name}</option>)}
                                                </select>
                                                {errors?.development_id && (
                                                    <span className="form__error">{errors?.development_id.message}</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className="mb-4">
                                                <label className="form-label">Category</label>
                                                <select className="form-select" {...register("categorie_id")} onChange={(e) => selectCategory(e.target.value)}>
                                                    {categorieData?.categorie?.map(data => <option value={data?._id} key={data?._id}>{data?.name}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className="mb-4">
                                                <label className="form-label">Sub Category</label>
                                                <select className="form-select" {...register("sub_id")} onChange={(e) => selectSubCategory(e.target.value)}>
                                                    {subCategorieData?.subCategorie?.map(data => <option value={data?._id} key={data?._id}>{data?.name}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row gx-3">
                                        <div className="col-md-4 mb-3">
                                            <div className="mb-4">
                                                <label className="form-label">Child Sub Category</label>
                                                <select className="form-select" {...register("childSub_id")}>
                                                    {child?.childSub?.map(data => <option value={data?._id} key={data?._id}>{data?.name}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className="mb-4">
                                                <label className="form-label">Brand</label>
                                                <select className="form-select" {...register("brand_id")}>
                                                    <option value='108123129123123'>itel</option>
                                                    <option value='1081231sr29123123'>samsone</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className="mb-4">
                                                <label className="form-label">Status</label>
                                                <select className="form-select" {...register("status")}>
                                                    <option value={true}>active</option>
                                                    <option value={false}>inactive</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row gx-2">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="product_stock" className="form-label">In Stock</label>
                                            <input type="number" placeholder="product_stock" className="form-control" id="product_stock"
                                                {...register("inStock")} />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="product_Quantity" className="form-label">Quantity</label>
                                            <input type="number" placeholder="product_Quantity" className="form-control" id="product_Quantity"
                                                {...register("quantity")}
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card mb-4">
                                <h1 className='m-0 p-0 text-end px-4'><span onClick={() => setFlavior([...flavior, { name: '', image: [] }])} style={{ cursor: 'pointer' }}>+</span></h1>
                                <div className="card-body">
                                    {
                                        flavior.map((data, index) =>
                                            <div key={index} className="row gx-3">
                                                <div className="col-md-5 mb-3">
                                                    <label htmlFor="product_Flavior" className="form-label" >Flavior Name</label>
                                                    <input onBlur={(event) => handleChangeText(index, event)} type="text" placeholder="Flavior Name" className="form-control" id="product_Flavior"
                                                    />
                                                </div>
                                                <div className="col-md-5 mb-3">
                                                    <label htmlFor="product_images" className="form-label">Images</label>
                                                    <input type="file" placeholder="Images" className="form-control" id="product_images"
                                                        onChange={(e) => handleFileChange(e, index)}
                                                        accept="image/webp"
                                                        multiple
                                                    />
                                                </div>
                                                <div className="col-md-2" style={{ marginTop: '25px' }}>
                                                    <button className="form-control btn  font-sm btn-light rounded" onClick={() => Deleteflavior(index)}><i class="material-icons md-delete_forever"></i> Delete</button>

                                                </div>
                                            </div>
                                        )
                                    }
                                    <div className="row gx-2">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="images-title" className="form-label" >Image Title</label>
                                            <input type="text" placeholder="Image Title" className="form-control" id="images-title"
                                                {...register("imagesTitle")}
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="images-title-alter-text" className="form-label">Image Alter Text</label>
                                            <input type="text" placeholder="Image Alter Text" className="form-control" id="images-title-alter-text"
                                                {...register("imageAlterText")}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card mb-4">
                                <h3 className='m-0 p-0 px-4'>Price</h3>
                                <div className="card-body">
                                    <div className="row gx-2">
                                        <div className="col-md-2 mb-3">
                                            <label htmlFor="Saleing_Price" className="form-label" >Selling Price <span style={{ color: 'red' }}>*</span></label>
                                            <input type="number" placeholder="Saleing Price" className="form-control" id="Saleing_Price"
                                                {...register("Saleing_Price")}
                                                onChange={(e) => setSelling(e.target.value)}

                                            />
                                            {errors?.Saleing_Price && (
                                                <span className="form__error">{errors?.Saleing_Price.message}</span>
                                            )}
                                        </div>
                                        <div className="col-md-2 mb-3">
                                            <label htmlFor="price-xs" className="form-label" >Price xs </label>
                                            <input type="number" placeholder="sm" className="form-control" id="price-xs"
                                                {...register("xs")}
                                            />
                                        </div>
                                        <div className="col-md-2 mb-3">
                                            <label htmlFor="price-sm" className="form-label" >Price sm</label>
                                            <input type="number" placeholder="sm" className="form-control" id="price-sm"
                                                {...register("sm")}
                                            />
                                        </div>
                                        <div className="col-md-2 mb-3">
                                            <label htmlFor="product_md" className="form-label">Price md</label>
                                            <input type="number" placeholder="md" className="form-control" id="product_md"
                                                {...register("md")}
                                            />
                                        </div>
                                        <div className="col-md-2 mb-3">
                                            <label htmlFor="product_lg" className="form-label">Price lg</label>
                                            <input type="number" placeholder="lg" className="form-control" id="product_lg"
                                                {...register("lg")}
                                            />
                                        </div>
                                        <div className="col-md-2 mb-3">
                                            <label htmlFor="product_xl" className="form-label">Price xl</label>
                                            <input type="number" placeholder="xl" className="form-control" id="product_xl"
                                                {...register("xl")}
                                            />
                                        </div>
                                        <div className="col-md-2 mb-3">
                                            <label htmlFor="product_2xl" className="form-label">Price 2xl</label>
                                            <input type="number" placeholder="2xl" className="form-control" id="product_2xl"
                                                {...register("xl_2")}
                                            />
                                        </div>
                                        <div className="col-md-2 mb-3">
                                            <label htmlFor="product_3xl" className="form-label">Price 3xl</label>
                                            <input type="number" placeholder="3xl" className="form-control" id="product_3xl"
                                                {...register("xl_3")}
                                            />
                                        </div>
                                        <div className="col-md-2 mb-3">
                                            <label htmlFor="product_4xl" className="form-label">Price 4xl</label>
                                            <input type="number" placeholder="4xl" className="form-control" id="product_4xl"
                                                {...register("xl_4")}
                                            />
                                        </div>
                                        <div className="col-md-2 mb-3">
                                            <label htmlFor="product_5xl" className="form-label">Price 5xl</label>
                                            <input type="number" placeholder="5xl" className="form-control" id="product_5xl"
                                                {...register("xl_5")}
                                            />
                                        </div>
                                        <div className="col-md-2 mb-3">
                                            <label htmlFor="product_6xl" className="form-label">Price 6xl</label>
                                            <input type="number" placeholder="6xl" className="form-control" id="product_6xl"
                                                {...register("xl_6")}
                                            />
                                        </div>
                                        <div className="col-md-2 mb-3">
                                            <label htmlFor="product_7xl" className="form-label">Price 7xl</label>
                                            <input type="number" placeholder="7xl" className="form-control" id="product_7xl"
                                                {...register("xl_7")}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row gx-2">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="product_tag" className="form-label" >Tag</label>
                                            <input type="text" placeholder="Tag" className="form-control" id="product_tag"
                                                {...register("tag")}
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="product_meta-title" className="form-label">Meta Title</label>
                                            <input type="text" placeholder="Meta Title" className="form-control" id="product_meta-title"
                                                {...register("meta_title")}

                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor='metadis' className="form-label">Meta Description</label>
                                        <textarea placeholder="Meta Description" className="form-control" rows="4" id='metadis'
                                            {...register("meta_description")}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card mb-4">
                                <h3 className='m-0 p-0 px-4'>Sale Offer</h3>
                                <div className="card-body">
                                    <div className="row gx-2">
                                        <div className="col-md-4 mb-3">
                                            <div className="mb-4">
                                                <label className="form-label">Sale Offer Type</label>
                                                <select className="form-select"
                                                    {...register("sale_offer_type")}
                                                    onChange={(e) => SetsaleOfferType(e.target.value)}
                                                >
                                                    <option value='$' selected>$</option>
                                                    <option value='%'>%</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="saleoffer" className="form-label">Sale Offer</label>
                                            <input type="number" placeholder="Sale Offer" className="form-control" id="saleoffer"
                                                {...register("sale_offer")}
                                                onChange={(e) => SetsaleOffer(parseInt(e.target.value))}
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="saleofferprice" className="form-label">Sale Offer Price</label>
                                            <input type="number" defaultValue={saleOfferType == '$' ? parseInt(selling) - saleOffer : saleOfferType == '%' ? selling - (selling * saleOffer / 100) : selling} placeholder="Sale Offer Price" className="form-control"
                                                id="saleofferprice"
                                                {...register("sale_offer_price")}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card mb-4">
                                <h3 className='m-0 p-0 px-4'>Coupon</h3>
                                <div className="card-body">
                                    <div className="row gx-2">
                                        <div className="col-md-4 mb-3">
                                            <div className="mb-4">
                                                <label className="form-label">Coupon Offer Type</label>
                                                <select className="form-select"
                                                    {...register("coupon_offer_type")}
                                                >
                                                    <option value='$' selected>$</option>
                                                    <option value='%'>%</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="product_coupon" className="form-label">Coupon Offer</label>
                                            <select className="form-select"
                                                {...register("coupon_offer")}
                                            >
                                                <option value={false} selected>$</option>
                                                <option value={true}>%</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="coupon_amount" className="form-label"> Offer amount </label>
                                            <input type="number"  {...register("coupon_Offer_amount")}
                                                className="form-control"
                                                id="coupon_amount"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card mb-4">
                                <h3 className='m-0 p-0 px-4'>Promo Code</h3>
                                <div className="card-body">
                                    <div className="row gx-2">
                                        <div className="col-md-4 mb-3">
                                            <div className="mb-4">
                                                <label className="form-label">Promo Offer Type</label>
                                                <select className="form-select"
                                                    {...register("promo_offer_type")}
                                                >
                                                    <option value='$' selected>$</option>
                                                    <option value='%'>%</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="Promo_amount" className="form-label">Promo Code</label>
                                            <input type="number" placeholder="Sale Offer" className="form-control" id="Promo_amount"
                                                {...register("promo_code")}
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="Promo_Offer_Price" className="form-label">Offer amount</label>
                                            <input type="number" className="form-control" id="Promo_Offer_Price"
                                                {...register("promo_amount")}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card mb-4">
                                <h3 className='m-0 p-0 px-4'>Deal</h3>
                                <div className="card-body">
                                    <div className="row gx-2">
                                        <div className="col-md-4 mb-3">
                                            <div className="mb-4">
                                                <label className="form-label">Deal Offer Type</label>
                                                <select className="form-select"
                                                    {...register("deal_offer_type")}
                                                >
                                                    <option value='$' selected>$</option>
                                                    <option value='%'>%</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="Promo_amount" className="form-label">Deal Time</label>
                                            <select className="form-select"
                                                {...register("deal_time_type")}
                                            >
                                                <option value='day' selected>day</option>
                                                <option value='weekday'>week</option>
                                                <option value='month'>month</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="Promo_Offer_Price" className="form-label">Offer amount</label>
                                            <input type="number" className="form-control" id="Promo_Offer_Price"
                                                {...register("deal_amount")}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 mb-3">
                            <div className="mb-4">
                                <label className="form-label">Description text Counter</label>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '10px'

                                }}>
                                    <input type="text"
                                        style={{ backgroundColor: 'white' }}
                                        className="form-control"
                                        onChange={(e) => setSameWord(e.target.value)}
                                    />
                                    {sameWord && specificWordCount}
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor='description' className="form-label"> Description</label>
                            <JoditEditor
                                ref={editor}
                                onChange={(newContent) => contentFieldChanaged(newContent)}
                            />
                        </div>
                        <button style={{ cursor: isLoading ? 'no-drop' : 'pointer' }} className="btn btn-md rounded font-sm hover-up">Submit</button>
                    </form>
                </div>
            </section>

        </DashboardLayout >
    )
}

export default AddProduct3