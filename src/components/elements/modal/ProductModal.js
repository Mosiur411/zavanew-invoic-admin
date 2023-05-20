import React, { useEffect } from 'react'
import { ProductSchema } from '../../../helpers/validation/ProductSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useUpdateProductMutation } from '../../../app/services/product';
import { toast } from 'react-toastify';

function ProductModal({ modal, setOpen }) {
    const { type, data } = modal;
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(ProductSchema) });
    const [UpdateProcut, { isSuccess ,isLoading}] = useUpdateProductMutation()

    const onSubmit = async (value, e) => {
        const productdata = { value, _id: data?._id }
        await UpdateProcut(productdata)
        e.target.reset();
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success('Product Update !')
            setOpen({ type: false })
        }
    }, [isSuccess])




    return (
        <>{
            type && <div className='modal_product'>
                <section className="content-main">
                    <div className="row">
                        <div className="col-12">
                            <div className="content-header">
                                <h2 className="content-title">Update Product</h2>
                                <button onClick={() => setOpen({ type: false })}>X</button>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="col-lg-12">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <div className="mb-4">
                                            <label htmlFor="product_title" className="form-label">Product Title <span style={{ color: 'red' }}>*</span></label>
                                            <input type="text" placeholder="Product Title" className="form-control" id="product_title"
                                                defaultValue={data?.product_name}
                                                {...register("product_name")}
                                            />
                                        </div>
                                        <div className="row gx-2">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="product_UPC" className="form-label">UPC (Single)</label>
                                                <input type="text" placeholder="Product_UPC" className="form-control" id="product_UPC"
                                                    defaultValue={data?.upc}
                                                    {...register("upc")}
                                                />

                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="product_UPC_Box" className="form-label">UPC(Box)</label>
                                                <input type="text" placeholder="Product_UPC_Box" className="form-control" id="product_UPC_Box"
                                                    defaultValue={data?.upcBox}
                                                    {...register("upcBox")}
                                                />
                                            </div>
                                        </div>
                                        <div className="row gx-2">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="product_cost" className="form-label">Cost</label>
                                                <input type="text" placeholder="Product_cost" className="form-control" id="product_cost"
                                                    defaultValue={data?.cost}
                                                    {...register("cost")}
                                                />

                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="product_price" className="form-label">Prices</label>
                                                <input type="text" placeholder="Product_prics" className="form-control" id="product_price"
                                                    defaultValue={data?.price}
                                                    {...register("price")}
                                                />
                                            </div>
                                        </div>
                                        <div className="row gx-2">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="product_quantity" className="form-label">Quantity</label>
                                                <input type="number" placeholder="Product_quantity" className="form-control" id="product_quantity"
                                                    defaultValue={data?.quantity}
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
            </div>
        }
        </>
    )
}

export default ProductModal