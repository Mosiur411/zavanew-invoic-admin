import React, { useRef } from 'react'
import Pdf from "react-to-pdf";
import DashboardLayout from '../components/layout/DashboardLayout'
import logo from '../assets/imgs/theme/logo.png'
import { useParams } from 'react-router-dom';
import { useGetToOrderQuery } from '../app/services/order';
import PdfFile from '../helpers/pdfFile/PdfFile';
import { PDFDownloadLink } from '@react-pdf/renderer';
function InvoiceDownload() {
  /*  date time  handel  */
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const day = currentDate.getDate();
  /*  due handel  handel  */
  const Duemonth = currentDate.setDate(currentDate.getDate() + 7);
  const monthss = Duemonth.toLocaleString('default', { month: 'long' });

  /* 
    const month = currentDate.toLocaleString('default', { month: 'long' });

  */
  var finalDate = currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear();



  console.log(monthss)
  console.log(Duemonth)
  console.log(finalDate)



  const { Id } = useParams();
  const ref = React.createRef();
  const { data } = useGetToOrderQuery(Id)
  /* coustomerId data  */
  const printAreaRef = useRef(null);

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
      <button onClick={handlePrint}>Print</button>
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
            <span>{data?.order[0]?.user?.name} : 9544495289</span><br />
          </div>
          <div>
            <strong>SOLD TO</strong>
            <div>
              <strong>{data?.order[0]?.coustomerId?.comphonyName}</strong><br />
              <span>{data?.order[0]?.coustomerId?.address}</span><br />
              <span>{data?.order[0]?.coustomerId?.city} {data?.order[0]?.coustomerId?.zip_code}</span><br />
              <span>{data?.order[0]?.coustomerId?.country}</span><br />
              <span>{data?.order[0]?.coustomerId?.phone}</span><br />
            </div>
          </div>

          {/*  <div>
            <strong>ORDER# </strong> <br />
            <strong>FEIN# </strong> <br />
            <strong>RESALE# </strong> <br />
            <strong>TOBACCO#</strong><br />
            <span>Email#</span><br />
          </div> */}
          {/*  <div>
            <strong><span >{Id.slice(0, 10)}</span></strong> <br />
            <strong><span>{data?.order[0]?.coustomerId?.etin}</span></strong> <br />
            <strong> <span>{data?.order[0]?.coustomerId?.resale}</span></strong> <br />
            <strong> <span>{data?.order[0]?.coustomerId?.tobacco}</span></strong><br />
            <strong> <span>{data?.order[0]?.coustomerId?.email}</span></strong><br />
          </div> */}

          <div>

            <img className='img_handel' src={logo} />
            <p><strong>Order by </strong> retwho.com</p>
          </div>
        </div>
        <div className="invoic_contect">
          <div>
            <span><strong>ORDER</strong> # {Id.slice(-9)}</span> <br />
            <span><strong>Invoice</strong> # {Id}</span>
          </div>
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
              <td>${data?.saleing_Price / data?.quantity}</td>
              <td>${data?.saleing_Price.toFixed(2)}</td>
            </tr>)}
            <tr>
              <td style={{ textAlign: 'end' }}
                className='totalQuantity'
              >Total Qty</td>
              <td>{data?.order[0]?.totalQuantity}</td>
              <td></td>
              <td></td>
            </tr>


            {/* totalQuantity */}
          </table>
        </div>
        <div className='invoicPayment'>
          <p style={{ textTransform: 'uppercase' }}>PAID BY # {data?.order[0]?.payment}</p>
          <div className="customersHisabContct">
            <div className="customersHisab">
              <div className="customersHisab">
                {
                  data?.order[0]?.payment == 'cash' && <div>

                    <div className="paymentTypeStyles">
                      <p>CASH</p>
                      <p>Paid</p>
                    </div>
                    <div className="paymentTypeStyles">
                      <p>RECEIVED  BY :</p>
                      <p>{data?.order[0]?.checkProviderName}</p>
                    </div>
                  </div>
                }

                {
                  data?.order[0]?.payment == 'check' && <div>
                    <div className="paymentTypeStyles">
                      <p>CHECK NO :</p>
                      <p >{data?.order[0]?.checkNumber}</p>
                    </div>
                    <div className="paymentTypeStyles">
                      <p>RECEIVED  BY :</p>
                      <p>{data?.order[0]?.checkProviderName}</p>
                    </div>
                  </div>
                }
                {
                  data?.order[0]?.payment == 'due' && <div>
                    <div className="paymentTypeStyles">
                      <p>DUE</p>
                      <p ></p>
                    </div>
                    <div className="paymentTypeStyles">
                      <p>RECEIVED  BY :</p>
                      <p>{data?.order[0]?.checkProviderName}</p>
                    </div>
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

export default InvoiceDownload