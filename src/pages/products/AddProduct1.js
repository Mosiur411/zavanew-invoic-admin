import React, { useEffect } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { ProductSchema } from '../../helpers/validation/ProductSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useAddProductMutation, useAddbulkProductMutation } from '../../app/services/product';
import { toast } from 'react-toastify';

function AddProduct1() {
    const [AddProduct, { isError, isLoading, isSuccess }] = useAddProductMutation()
    /* bulk product upload api  */
    const [AddbulkProduct, { isError: bulkisError, isLoading: bulkisLoading, isSuccess: bulkisSuccess }] = useAddbulkProductMutation()

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(ProductSchema) });

    const onSubmit = async (data, e) => {
        await AddProduct(data)
        e.target.value.reset()
    }
    /*  bulk product upload  */
    const handleBullkFileSelect = async (event) => {
        const files = event.target.files;
        const formData = new FormData();
        formData.append('product.csv', files[0])
        await AddbulkProduct(formData)
    };




    useEffect(() => {
        if (isSuccess || bulkisSuccess) {
            toast.success('Add Product ')
            reset()
        }
        if (isError || bulkisError) {
            toast.error('sorry  not add!')
        }
    }, [isError, isSuccess, bulkisSuccess, bulkisError])



    return (
        <DashboardLayout>
            <section className="content-main">
                <div className="row">
                    <div className="col-9">
                        <div className="content-header">
                            <h2 className="content-title">Add New Product </h2>
                            <div>
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
                                        <input type="text" placeholder="Product Title" className="form-control" id="product_title"
                                            {...register("product_name")}
                                        />
                                        {errors?.product_name && (
                                            <span className="form__error">{errors?.product_name.message}</span>
                                        )}
                                    </div>
                                    <div className="row gx-2">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="product_UPC" className="form-label">UPC (Single)</label>
                                            <input type="text" placeholder="Product_UPC" className="form-control" id="product_UPC"
                                                {...register("upc")}
                                            />

                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="product_UPC_Box" className="form-label">UPC(Box)</label>
                                            <input type="text" placeholder="Product_UPC_Box" className="form-control" id="product_UPC_Box"
                                                {...register("upcBox")}
                                            />
                                        </div>
                                    </div>
                                    <div className="row gx-2">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="product_cost" className="form-label">Cost</label>
                                            <input type="text" placeholder="Product_cost" className="form-control" id="product_cost"
                                                {...register("cost")}
                                            />

                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="product_price" className="form-label">Prices</label>
                                            <input type="text" placeholder="Product_prics" className="form-control" id="product_price"
                                                {...register("price")}
                                            />
                                        </div>
                                    </div>
                                    <div className="row gx-2">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="product_quantity" className="form-label">Quantity</label>
                                            <input type="number" placeholder="Product_quantity" className="form-control" id="product_quantity"
                                                {...register("quantity")}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button style={{ cursor: isLoading ? 'no-drop' : 'pointer' }} className="btn btn-md rounded font-sm hover-up">Submit</button>
                    </form>
                </div>
            </section>





        </DashboardLayout>
    )
}

export default AddProduct1