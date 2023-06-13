import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useGetToOrderQuery, useUpdateOrderMutation } from '../../../app/services/order';
import DashboardLayout from '../../layout/DashboardLayout';
import GetSpinner from '../../../helpers/shared/GetSpinner';
import SingleOrderEditCat from './SingleOrderEditCat';
import Shrinkage from './Shrinkage';
import Refund from './Refund';
import { OrderSchema } from '../../../helpers/validation/OrderSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


function OrderEdit() {
    const [Loading, setLoading] = useState(true)
    const { Id } = useParams();
    const pathname = `id=${Id}`;
    const { data, isLoading, isSuccess } = useGetToOrderQuery(pathname);
    const { _id, item, totalPrice, payment, totalQuantity, checkProviderName, checkNumber } = useMemo(() => (data ? data?.order[0] : {}), [data]);
    const [orderUpdate, { isLoading: orderLu, isSuccess: orderS }] = useUpdateOrderMutation()
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(OrderSchema) });



    useEffect(() => {
        if (isSuccess) {
            setLoading(false)
        }
        if (orderS) {
            toast.success('Order Update')

        }
    }, [isLoading, orderS])

    /* payment section  */
    const [bank, setBank] = useState(payment)
    const paymentMethod = [
        { name: 'CASH', data: 'cash' },
        { name: 'CHECK', data: 'check' },
        { name: 'DUE', data: 'due' },
    ]
    const onSubmit = async (value) => {
        const data = { value, id: Id }
        await orderUpdate(data)
    }



    /*  Refund */
    const [refund, setRefund] = useState({ type: false, data: null })
    const [shrinkage, setShrinkage] = useState({ type: false, data: null })


    return (
        <DashboardLayout>
            {Loading && <GetSpinner />}
            <section className="content-main">
                <div className="content-header">
                    <div>
                        <h2 className="content-title card-title">Cart Details</h2>
                    </div>
                </div>
                {
                    _id == undefined ? <h1>Not items Add</h1> : <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
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
                                                {item.map(cart => <SingleOrderEditCat key={cart?._id} cartItem={cart} _id={_id}
                                                    setRefund={setRefund}
                                                    setShrinkage={setShrinkage}
                                                />)}

                                                <tr className="text-end">
                                                    <td colspan="6">
                                                        <article className="float-end">
                                                            <dl className="dlist">
                                                                <dt>Total Quantity :</dt>
                                                                <dd><b className="h5">{totalQuantity}</b></dd>
                                                            </dl>
                                                            <dl className="dlist">
                                                                <dt>Total Prices :</dt>
                                                                <dd><b className="h5">${totalPrice?.toFixed(2)}</b></dd>
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
                                                    onChange={(e) => setBank(e.target.value)}
                                                >
                                                    {
                                                        paymentMethod?.map((data) => <option value={data?.data}
                                                            selected={data?.data == payment}
                                                        >{data?.name}</option>)
                                                    }
                                                    {errors?.payment && (
                                                        <span className="form__error">{errors?.payment.message}</span>
                                                    )}
                                                </select>
                                                {bank === 'check' ? <div>
                                                    <input type="text" placeholder="Check Number" className="form-control"
                                                        defaultValue={checkNumber}
                                                        {...register("checkNumber")}
                                                    />
                                                    <input type="text" placeholder="Your Check Names" className="form-control"
                                                        {...register("checkProviderName")}
                                                        defaultValue={checkProviderName}
                                                    />
                                                </div> : ''}
                                                {bank === 'cash' ? <div>
                                                    <input type="text" placeholder="Your Cash Names" className="form-control"
                                                        {...register("checkProviderName")}
                                                        defaultValue={checkProviderName}
                                                    />
                                                </div> : ''}
                                                {bank === 'due' ? <div>
                                                    <input type="text" placeholder="Your Due Names" className="form-control"
                                                        {...register("checkProviderName")}
                                                        defaultValue={checkProviderName}
                                                    />
                                                </div> : ''}


                                            </div>
                                            <div className="h-25 pt-4">
                                                <button style={{ cursor: orderLu ? 'no-drop' : 'pointer' }} className="btn btn-primary">Order Update</button>

                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                }


            </section>
            {/* refund  */}
            <Refund refund={refund} setRefund={setRefund} id={Id} />
            {/* Shrinkage */}
            <Shrinkage shrinkage={shrinkage} setShrinkage={setShrinkage} id={Id}/>

        </DashboardLayout>
    )
}

export default OrderEdit