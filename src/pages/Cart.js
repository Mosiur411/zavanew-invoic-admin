import React, { useEffect, useMemo, useState } from 'react'
import DashboardLayout from '../components/layout/DashboardLayout'
import { useAddOrderMutation, useGetToCartQuery } from '../app/services/addToCart'
import { OrderSchema } from '../helpers/validation/OrderSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useGetCoustomerQuery } from '../app/services/coustomer';
function Cart() {
    const { data } = useGetToCartQuery()
    const [search, setSearchValue] = useState('')
    const [{ pageIndex, pageSize }, setPagination] = useState({ pageIndex: 0, pageSize: 10, });
    const pathname = `page=${pageIndex}&limit=${pageSize}&search=${search}`;
    const { data: coustomer } = useGetCoustomerQuery(pathname)

    const [PorusctOrder, { isLoading, isSuccess, isError }] = useAddOrderMutation()
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(OrderSchema) });

    /* coustomer id need  */
    const [coustomerId, setCoustomerId] = useState()

    const onSubmit = async (value) => {
        if (coustomerId) {
            const items = { ...value, totalPrice: data?.totalPrice, coustomerId: coustomerId }
            await PorusctOrder(items)
        } else {
            toast.error('coustomer not select')
        }
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success('Order add  ')
        }
        if (isError) {
            toast.error('sorry  not add!')
        }
    }, [isError, isSuccess])
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
                                                    <th width="20%" className="text-end">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data?.items.map(data => <tr key={data?._id}>
                                                    <td>{data?.product_id?.product_name}</td>
                                                    <td>${data?.product_id?.price}</td>
                                                    <td>{data?.quantity}</td>
                                                    <td className="text-end">${(data?.price)}</td>
                                                </tr>
                                                )}

                                                <tr>
                                                    <td colspan="4">
                                                        <article className="float-end">
                                                            <dl className="dlist">
                                                                <dt>Grand total:</dt>
                                                                <dd><b className="h5">${data?.totalPrice}</b></dd>
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
                                                <select className="form-select" {...register("payment")}>
                                                    <option selected value='cash'>cash</option>
                                                    {errors?.payment && (
                                                        <span className="form__error">{errors?.payment.message}</span>
                                                    )}
                                                </select>
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