import React from 'react'
import Pdf from "react-to-pdf";
import DashboardLayout from '../components/layout/DashboardLayout'
import logo from '../assets/imgs/theme/logo.png'
import { useParams } from 'react-router-dom';
import { useGetToOrderQuery } from '../app/services/order';
function InvoiceDownload() {
    const { Id } = useParams();
    const ref = React.createRef();
    const { data } = useGetToOrderQuery(Id)
    /* coustomerId data  */
    console.log(data?.order[0])

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
                                <span>{data?.order[0]?.coustomerId?.country}</span><br />
                                <span>{data?.order[0]?.coustomerId?.phone}</span><br />
                            </div>
                        </div>
                        <div>
                            <strong>ORDER# <span>{Id.slice(0, 5)}</span></strong> <br />
                            <strong>FEIN# <span>{data?.order[0]?.coustomerId?.etin}</span></strong> <br />
                            <strong>RESALE# <span>{data?.order[0]?.coustomerId?.resale}</span></strong> <br />
                            <strong>TOBACCO# <span>{data?.order[0]?.coustomerId?.tobacco}</span></strong><br />
                            <span>{data?.order[0]?.coustomerId?.email}</span><br />

                        </div>
                        <div>
                            <img src={logo} alt="logo" />
                            <p>Order by Retwho</p>
                        </div>
                    </div>
                    <div className="invoic_contect">
                        <p><strong>Invoice</strong> #{Id}</p>
                        <div>
                            <strong>Issue date</strong> <br />
                            <span>01 Jan, 2022</span>
                        </div>
                        <div>
                            <strong>Due date</strong><br />
                            <span>01 Jan, 2022</span>
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
                                <td>{data?.price / data?.quantity}</td>
                                <td>{data?.price}</td>
                            </tr>)}
                        </table>
                    </div>
                    <div className="customersHisabContct">
                        <div className="cashCheck">
                            <div >
                                <p>PAID BY # CASH</p>
                                <span>___________</span>
                            </div>
                            <div >
                                <p>CHECK</p>
                                <span>___________</span>
                            </div>
                            <div >
                                <p>CARD</p>
                                <span>___________</span>
                            </div>
                        </div>
                        <div className="customersHisab">
                            <div>
                                <strong>Invoice total</strong>
                                <span>{data?.order[0]?.totalPrice}</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div >
        </DashboardLayout>
    )
}

export default InvoiceDownload