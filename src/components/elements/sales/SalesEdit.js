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
import { useGetSingleSalesQuery } from '../../../app/services/sales';


function SalesEdit() {
    /* all state  */
    const [Loading, setLoading] = useState(true)
    const [refund, setRefund] = useState({ type: false, data: null })
    const [shrinkage, setShrinkage] = useState({ type: false, data: null })

    /* pathName  */
    const { Id } = useParams();
    const pathnames = `id=${Id}`;
    /* fetch */
    const { data, isLoading, isSuccess } = useGetSingleSalesQuery(pathnames);
    /* fetch data modify */
    const { _id, item, totalPrice, payment, totalQuantity, checkProviderName, checkNumber, coustomerId: coustomerIdGet } = useMemo(() => (data ? data : {}), [data]);


    useEffect(() => {
        if (isSuccess) {
            setLoading(false)
        }
    }, [isLoading])
    /* extra usersate add  */


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