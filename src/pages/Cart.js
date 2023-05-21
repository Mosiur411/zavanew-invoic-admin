import React, { useEffect, useMemo, useState } from 'react'
import DashboardLayout from '../components/layout/DashboardLayout'
import { useAddOrderMutation, useDeleteToCartMutation, useGetToCartQuery, useUpdateToCartMutation } from '../app/services/addToCart'
import { OrderSchema } from '../helpers/validation/OrderSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useGetCoustomerQuery } from '../app/services/coustomer';
import { number } from 'yup';
function Cart() {
    const { data } = useGetToCartQuery()
    const [search, setSearchValue] = useState('')
    const [bankCheck, setBankCheck] = useState('')
    const [CartQantity, setCartQantity] = useState()
    const [{ pageIndex, pageSize }, setPagination] = useState({ pageIndex: 0, pageSize: 10, });
    const pathname = `page=${pageIndex}&limit=${pageSize}&search=${search}`;
    const { data: coustomer } = useGetCoustomerQuery(pathname)
    const [PorductOder, { isLoading, isSuccess, isError }] = useAddOrderMutation()
    const [CartDelete, { isLoading: deleteIsLoading, isSuccess: deleteIsSuccess }] = useDeleteToCartMutation()
    const [CartUpdate, { isLoading: updateIsLoading, isSuccess: updateIsSuccess }] = useUpdateToCartMutation()
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(OrderSchema) });

    /* coustomer id need  */
    const [coustomerId, setCoustomerId] = useState()

    /* data post  */
    const onSubmit = async (value) => {
        if (coustomerId) {
            const items = { ...value, totalPrice: data?.totalPrice, coustomerId: coustomerId }
            await PorductOder(items)
        } else {
            toast.error('coustomer not select')
        }
    }
    /* card product delete  */
    const CartDeletes = async (id) => {
        await CartDelete(id)
    }
    const CartUpdates = async (id) => {
        if (Number(CartQantity)) {
            const data = { CartQantity, id }
            await CartUpdate(data)

        }
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success('Order add  ')
        }
        if (isError) {
            toast.error('sorry  not add!')
        }
        if (deleteIsSuccess) {
            toast.success('card Product Remove ')
        }
        if (updateIsSuccess) {
            toast.success('card Product Update ')
        }
    }, [isError, isSuccess, deleteIsSuccess, updateIsSuccess])
    const coustomerData = useMemo(() => (coustomer ? coustomer?.coustomer : []), [
        coustomer,
        search
    ]);

    return (
        <DashboardLayout>
            <section className="content-main">
                <div className="content-header">
                    <div>
                        <h2 className="content-title card-title">Card detail</h2>
                    </div>
                </div>
                {
                    data == undefined ? <h1>Not items Add</h1> : <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th width="40%">Product</th>
                                                    <th width="20%">Unit Price</th>
                                                    <th width="20%">Quantity</th>
                                                    <th width="20%">Total</th>
                                                    <th className="text-end">Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data?.items.map(data => <tr key={data?._id}>
                                                    <td>{data?.product_id?.product_name.toUpperCase()}</td>
                                                    <td>${data?.product_id?.price?.toFixed(2)}</td>
                                                    <td>
                                                        <input style={{ width: '50px' }} type='number'
                                                            onChange={(e) => setCartQantity(e.target.value)}
                                                            min="1" defaultValue={data?.quantity} />
                                                    </td>
                                                    <td >${data?.price?.toFixed(2)}</td>
                                                    <td className="text-end"
                                                        style={{
                                                            display: 'flex', justifyContent: 'center', alignItems: 'center'
                                                            , gap: '5px'
                                                        }}
                                                    >
                                                        <a onClick={() => CartUpdates(data?._id)} className="btn btn-sm font-sm rounded btn-brand"
                                                            hidden={Number(CartQantity) > Number(data?.product_id?.quantity)}
                                                        >  Add </a>
                                                        <a onClick={() => CartDeletes(data?._id)} className="btn btn-sm font-sm btn-light rounded"> <i className="material-icons md-delete_forever"></i>  </a>
                                                    </td>
                                                </tr>
                                                )}

                                                <tr className="text-end">
                                                    <td colspan="6">
                                                        <article className="float-end">
                                                            <dl className="dlist">
                                                                <dt>Grand total:</dt>
                                                                <dd><b className="h5">${data?.totalPrice?.toFixed(2)}</b></dd>
                                                            </dl>
                                                        </article>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-lg-12">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="box shadow-sm bg-light">
                                                <h6 className="mb-15">Payment info</h6>
                                                <select className="form-select" {...register("payment")}
                                                    onChange={(e) => setBankCheck(e.target.value)}
                                                >
                                                    <option selected value='cash'>CASH</option>
                                                    <option value='check' >CHECK</option>
                                                    <option value='due'>DUE</option>
                                                    {errors?.payment && (
                                                        <span className="form__error">{errors?.payment.message}</span>
                                                    )}
                                                </select>
                                                {bankCheck === 'check' ? <div>
                                                    <input type="text" placeholder="Check Number" className="form-control"
                                                        {...register("checkNumber")}
                                                    />
                                                    <input type="text" placeholder="Your Names" className="form-control"
                                                        {...register("checkProviderName")}
                                                    />
                                                </div> : ''}
                                            </div>
                                            <div className="h-25 pt-4">
                                                <button style={{ cursor: isLoading ? 'no-drop' : 'pointer' }} className="btn btn-primary">Order</button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                                <div className="col-lg-1"></div>
                                <div className="col-lg-4">
                                    <div className="box shadow-sm ">
                                        <h6 className="mb-15">Coustomer info</h6>
                                        <div className="col-lg-12 me-auto">
                                            <input onClick={(e) => setSearchValue(e.target.value)} type="text" placeholder="Search..." className="form-control" />
                                        </div>
                                        {
                                            coustomerData?.map((data) =>
                                                <div key={data?._id} className="d-flex align-items-center justify-content-between mb-4">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <h6>{data?.comphonyName}</h6>
                                                            <p className="text-muted font-xs">{data?.name}</p>
                                                        </div>
                                                    </div>
                                                    <a onClick={() => setCoustomerId(data?._id)} className="btn btn-xs"><i className="material-icons md-add"></i> Add</a>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                }


            </section>




        </DashboardLayout >
    )
}

export default Cart