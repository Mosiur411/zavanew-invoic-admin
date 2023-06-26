import React, { useRef } from 'react'
import Pdf from "react-to-pdf";
import DashboardLayout from '../components/layout/DashboardLayout'
import logo from '../assets/imgs/theme/logo.png'
import { useParams } from 'react-router-dom';
import { useGetToOrderQuery } from '../app/services/order';
import PdfFile from '../helpers/pdfFile/PdfFile';
import { PDFDownloadLink } from '@react-pdf/renderer';
import moment from 'moment/moment';
import { useGetSingleSalesQuery } from '../app/services/sales';
function SalesInvoiceDownload() {
    const { Id } = useParams();
    const ref = React.createRef();
    const { data } = useGetSingleSalesQuery(`id=${Id}`)

    /* coustomerId data  */
    const printAreaRef = useRef(null);
    /* data handel  */
    const updatedDate = data?.sales?.updatedAt;
    const updatedMoment = moment(updatedDate);
    const formattedDate = updatedMoment.format("DD MMMM, YYYY");



    const handlePrint = () => {
        const printContent = printAreaRef.current.innerHTML;
        const printWindow = window.open(Id, '_blank');
        printWindow.document.open();
        printWindow.document.write('<html><head><title>Print</title>');
        printWindow.document.write('<style>');
        printWindow.document.write(`
        .order_container {
            max-width: 800px !important;
            margin: 0 auto !important;
            padding: 30px;
            border: 1px solid;
          
          }
          .img_handel{
            max-width: 220px;
          }
          
          .order_topContect {
            display: flex;
            justify-content: space-between;
            gap: 14px;
          }
          
          span {
            font-weight: normal;
            font-size: 15px;
          }
          
          strong span {
            margin-left: 20px;
          }
          
          .invoic_contect {
            margin: 5px 0px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 14px;
          }
          
          
          /* table */
          #customers {
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
          }
          
          #customers td,
          #customers th {
            border: 1px solid #ddd;
            padding: 8px;
          }
          
          #customers tr:nth-child(even) {
            background-color: #f2f2f2;
          }
          
          #customers tr:hover {
            background-color: #ddd;
          }
          
          #customers th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            color: black;
          }
          
          
          
          .invoicPayment {
            margin-top: 10px;
          }
          
          .customersHisabContct {
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            align-items: start;
            gap: 5px;
          }
          
          
          .customersHisab {
            max-width: 100% !important;
          
          }
          
          .customersHisab div {
            display: flex;
            justify-content: space-between;
            gap: 10px;
          }
          .paymentTypeStyles div{
            display: flex;
            gap: 10px;
          }
          
          .cashCheck {
            width: fit-content;
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 5px;
          }
          
          .cashCheck div {
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 5px;
          }
          .totalQuantity{
            text-align: end;
          }
    
        `);
        printWindow.document.write('</style></head><body>');
        printWindow.document.write(printContent);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();

    };


    return (
        <DashboardLayout>
            <button onClick={handlePrint}> <i className="material-icons md-print"></i></button>

            <div ref={printAreaRef} className='order_container'>
                <div className='order_topContect'>
                    <div>
                        <strong>SOLD BY</strong>
                        <div>
                            <strong>ZAVA WHOLESALE</strong><br />
                            <span>3926 Coral Ridge Dr. <br /> Coral Springs FL 33065
                            </span><br />
                            <span>USA</span><br />
                        </div>
                        <span>{data?.sales?.user?.name} : 9544495289</span><br />
                    </div>
                    <div>
                        <strong>SOLD TO</strong>
                        <div>
                            <strong>{data?.sales?.coustomerId?.comphonyName}</strong><br />
                            <span>{data?.sales?.coustomerId?.address}</span><br />
                            <span>{data?.sales?.coustomerId?.city} {data?.sales?.coustomerId?.state} {data?.sales?.coustomerId?.zip_code}</span><br />
                            <span>{data?.sales?.coustomerId?.country}</span><br />
                            <span>{data?.sales?.coustomerId?.phone}</span><br />
                        </div>
                    </div>


                    <div>

                        <img className='img_handel' src={logo} />
                        <p><strong>Order by </strong> retwho.com</p>

                    </div>
                </div>
                <div className="invoic_contect">
                    <div>
                        <span><strong>ORDER</strong> # {data?.sales?.orderId}</span> <br />
                        <span><strong>Invoice</strong> # {Id}</span>
                    </div>
                    <div>
                        <strong>Issue date</strong> <br />
                        <span>{formattedDate}</span>
                    </div>
                    <div>
                        <strong>Due date</strong><br />
                        <span>{formattedDate}</span>
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
                        {data?.sales?.item?.map(data => <tr>
                            <td>{data?.product_name}</td>
                            <td>{data?.quantity}</td>
                            <td>${data?.saleing_Price / data?.quantity}</td>
                            <td>${data?.saleing_Price.toFixed(2)}</td>
                        </tr>)}
                        <tr>
                            <td style={{ textAlign: 'end' }}
                                className='totalQuantity'
                            >Total Qty</td>
                            <td>{data?.sales?.totalQuantity}</td>
                            <td></td>
                            <td></td>
                        </tr>


                        {/* totalQuantity */}
                    </table>
                </div>
                <div className='invoicPayment'>
                    <p style={{ textTransform: 'uppercase' }}>PAID BY # {data?.sales?.payment}</p>
                    <div className="customersHisabContct">
                        <div className="customersHisab">
                            <div className="customersHisab">
                                {
                                    data?.sales?.payment == 'cash' && <div>

                                        <div className="paymentTypeStyles">
                                            <p>CASH</p>
                                            <p>Paid</p>
                                        </div>
                                        <div className="paymentTypeStyles">
                                            <p>RECEIVED  BY :</p>
                                            <p>{data?.sales?.checkProviderName}</p>
                                        </div>
                                    </div>
                                }

                                {
                                    data?.sales?.payment == 'check' && <div>
                                        <div className="paymentTypeStyles">
                                            <p>CHECK NO :</p>
                                            <p >{data?.sales?.checkNumber}</p>
                                        </div>
                                        <div className="paymentTypeStyles">
                                            <p>RECEIVED  BY :</p>
                                            <p>{data?.sales?.checkProviderName}</p>
                                        </div>
                                    </div>
                                }
                                {
                                    data?.sales?.payment == 'due' && <div>
                                        <div className="paymentTypeStyles">
                                            <p>DUE</p>
                                            <p ></p>
                                        </div>
                                        <div className="paymentTypeStyles">
                                            <p>RECEIVED  BY :</p>
                                            <p>{data?.sales?.checkProviderName}</p>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    <div>
                            <div className="customersHisab">
                                <div>
                                    <strong>Past Due</strong>
                                    <span>{data?.sumTotaloldPrices.toFixed(2)}</span>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div className="customersHisab">
                                <div>
                                    <strong>Invoice total</strong>
                                    <span>${data?.sales?.totalPrice.toFixed(2)}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
            {/* <div>
                <PDFDownloadLink document={<PdfFile data={data} Id={Id} />} filename="FORM">
                    {({ loading }) => (loading ? <button>Loading Document...</button> : <button>Download</button>)}
                </PDFDownloadLink>
            </div >
            <PdfFile data={data} Id={Id} /> */}

        </DashboardLayout>
    )
}

export default SalesInvoiceDownload