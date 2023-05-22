import React from 'react'
import Pdf from "react-to-pdf";
import DashboardLayout from '../components/layout/DashboardLayout'
import logo from '../assets/imgs/theme/logo.png'
import { useParams } from 'react-router-dom';
import { useGetToOrderQuery } from '../app/services/order';
function InvoiceDownload() {
    /*  date time ganaret  */
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const day = currentDate.getDate();
















    const { Id } = useParams();
    const ref = React.createRef();
    const { data } = useGetToOrderQuery(Id)
    /* coustomerId data  */


    return (
        <DashboardLayout>
            <div>
                <Pdf targetRef={ref} filename={`${Id}.pdf`}>
                    {({ toPdf }) => (
                        <button className="btn btn-md rounded font-sm" defaultColor="info"
                            onClick={toPdf}>Download PDF</button>
                    )}
                </Pdf>
                <div className="order_container" ref={ref}>
                    <div className="order_topContect">
                        <div>
                            <strong>SOLD BY</strong>
                            <div>
                                <strong>ZAVA WHOLESALE</strong><br />
                                <span>3926 Coral Ridge Dr. <br /> Coral Springs FL 33065
                                </span><br />
                                <span>USA</span><br />
                            </div>
                            <strong>9544495289</strong><br />
                            <strong>{data?.order[0]?.user?.name}</strong>

                        </div>
                        <div>
                            <strong>SOLD TO</strong>
                            <div>
                                <span>{data?.order[0]?.coustomerId?.comphonyName}</span><br />
                                <span>{data?.order[0]?.coustomerId?.address}</span><br />
                                <span>{data?.order[0]?.coustomerId?.city}</span><br />
                                <span>{data?.order[0]?.coustomerId?.zip_code}</span><br />
                                <span>{data?.order[0]?.coustomerId?.country}</span><br />
                                <span>{data?.order[0]?.coustomerId?.phone}</span><br />
                            </div>
                        </div>

                        <div>
                            <strong>ORDER# </strong> <br />
                            <strong>FEIN# </strong> <br />
                            <strong>RESALE# </strong> <br />
                            <strong>TOBACCO#</strong><br />
                            <strong>Email#</strong><br />
                        </div>
                        <div>
                            <strong><span >{Id.slice(0, 10)}</span></strong> <br />
                            <strong><span>{data?.order[0]?.coustomerId?.etin}</span></strong> <br />
                            <strong> <span>{data?.order[0]?.coustomerId?.resale}</span></strong> <br />
                            <strong> <span>{data?.order[0]?.coustomerId?.tobacco}</span></strong><br />
                            <strong> <span>{data?.order[0]?.coustomerId?.email}</span></strong><br />
                        </div>
                        <div>
                            <img src={logo} alt="logo" />
                            <p>Order by retwho.com</p>
                        </div>
                    </div>
                    <div className="invoic_contect">
                        <p><strong>Invoice</strong> #{Id}</p>
                        <div>
                            <strong>Issue date</strong> <br />
                            <span>{`${day}  ${month},   ${year}`}</span>
                        </div>
                        <div>
                            <strong>Due date</strong><br />
                            <span>{`${day}  ${month},   ${year}`}</span>
                        </div>
                    </div>
                    <div>
                        <table id="customers">
                            <tr>
                                <th>Product Name</th>
                                <th>Qty</th>
                                <th>Unit Price</th>
                                <th>Amount</th>
                            </tr>
                            {data?.order[0]?.item?.map(data => <tr>
                                <td>{data?.product_name}</td>
                                <td>{data?.quantity}</td>
                                <td>${data?.price / data?.quantity}</td>
                                <td>${data?.price.toFixed(2)}</td>
                            </tr>)}
                        </table>
                    </div>
                    <div className='invoicPayment'>
                        <p style={{ textTransform: 'uppercase' }}>PAID BY # {data?.order[0]?.payment}</p>
                        <div className="customersHisabContct">
                            <div className="customersHisab">
                                <div className="customersHisab">
                                    {
                                        data?.order[0]?.payment == 'cash' && <div className="paymentTypeStyles">
                                            <p>Cash</p>
                                            <p className='paid'>Paid</p>
                                        </div>
                                    }
                                    {
                                        data?.order[0]?.payment == 'check' && <div>
                                            <div className="paymentTypeStyles">
                                                <p>CHECK NO :</p>
                                                <p className='paid'>{data?.order[0]?.checkNumber}</p>
                                            </div>
                                            <div className="paymentTypeStyles">
                                                <p>RECEIVED  BY :</p>
                                                <p className='paid'>{data?.order[0]?.checkProviderName}</p>
                                            </div>
                                        </div>
                                    }
                                    {
                                        data?.order[0]?.payment == 'due' && <div className="paymentTypeStyles">
                                            <p>Due</p>
                                            <p className='paid'>Paid</p>
                                        </div>
                                    }
                                </div>



                            </div>
                            <div>
                                <div className="customersHisab">
                                    <div>
                                        <strong>Invoice total</strong>
                                        <span>${data?.order[0]?.totalPrice.toFixed(2)}</span>
                                    </div>
                                </div>

                            </div>
                            {/* <div className="cashCheck">
                                <div >
                                    <p>CHECK</p>
                                    <span >{data?.order[0]?.checkNumber}</span>
                                </div>
                                <div >
                                    <p>CARD</p>
                                    <span>___________</span>
                                </div>

                                <div className="customersHisab">
                                    <div>
                                        <strong>Invoice total</strong>
                                        <span>{data?.order[0]?.totalPrice.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

            </div >
        </DashboardLayout>
    )
}

export default InvoiceDownload