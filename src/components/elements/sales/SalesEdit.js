import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useUpdateOrderMutation } from '../../../app/services/order';
import DashboardLayout from '../../layout/DashboardLayout';
import GetSpinner from '../../../helpers/shared/GetSpinner';

import { toast } from 'react-toastify';
import CoustomerItm from '../../../pages/CoustomerItm';
import { useGetCoustomerQuery } from '../../../app/services/coustomer';
import SingleSalesCart from './SingleSalesCart';
import Refund from '../order/Refund';
import Shrinkage from '../order/Shrinkage';
import { useGetSingleSalesQuery, useSalesPaymentMutation } from '../../../app/services/sales';
import { OrderSchema } from '../../../helpers/validation/OrderSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


function SalesEdit() {
    const paymentMethod = [
        { name: 'cash', data: 'cash' },
        { name: 'check', data: 'check' },
        { name: 'due', data: 'due' },
    ]
    /* all state  */
    const [Loading, setLoading] = useState(true)
    const [refund, setRefund] = useState({ type: false, data: null })
    const [shrinkage, setShrinkage] = useState({ type: false, data: null })

    /* pathName  */
    const { Id } = useParams();
    const pathnames = `id=${Id}`;
    /* fetch */
    const { data, isLoading, isSuccess } = useGetSingleSalesQuery(pathnames);
    const [PaymentTypeAdd, { isSuccess: PaymentToaster, isLoading: PaymentLoading }] = useSalesPaymentMutation();
    useEffect(() => {
        if (isSuccess) {
            setLoading(false)
        }
        if (PaymentToaster) {
            toast.success("Payment Info Update")
        }
    }, [isLoading, PaymentToaster])
    /* fetch data modify */
    const { _id, item, totalPrice, payment, totalQuantity, checkProviderName, checkNumber } = useMemo(() => (data ? data?.sales : {}), [data]);

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(OrderSchema) });
    /* from submit */
    const onSubmit = async (value) => {
        const data = { value, id: Id }
        await PaymentTypeAdd(data)
    }

    const [bank, setBank] = useState(payment);
    useEffect(() => {
        setBank(payment);
    }, [payment]);

    return (
        <DashboardLayout>
            {Loading && <GetSpinner />}
            <section className="content-main">
                <div className="content-header">
                    <div>
                        <h2 className="content-title card-title">Sales Details</h2>
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
                                                {item.map(cart => <SingleSalesCart key={cart?._id} cartItem={cart} _id={_id}
                                                    setRefund={setRefund}
                                                    setShrinkage={setShrinkage}
                                                />)}

                                                <tr className="text-end">
                                                    <td colSpan="6">
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
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="box shadow-sm bg-light">
                                        <h6 className="mb-15">Payment info</h6>
                                        <select className="form-select" {...register("payment")}
                                            onChange={(e) => setBank(e.target.value)}
                                        >
                                            {
                                                paymentMethod?.map((data, index) => <option key={index} defaultValue={data?.data}
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
                                        <button style={{ cursor: PaymentLoading ? 'no-drop' : 'pointer' }} className="btn btn-primary">Sale Update</button>

                                    </div>
                                </form>

                            </div>
                        </div>


                    </div>
                }


            </section>
            {/* refund  */}
            <Refund refund={refund} setRefund={setRefund} id={Id} />
            {/* Shrinkage */}
            <Shrinkage shrinkage={shrinkage} setShrinkage={setShrinkage} id={Id} />

        </DashboardLayout>
    )
}

export default SalesEdit