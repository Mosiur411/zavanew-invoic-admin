import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'

function Transaction2() {
    return (
        <DashboardLayout>
            <section className="content-main">
                <div className="content-header">
                    <h2 className="content-title">Transactions</h2>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-9">
                                <header className="border-bottom mb-4 pb-4">
                                    <div className="row">
                                        <div className="col-lg-5 col-6 me-auto">
                                            <input type="text" placeholder="Search..." className="form-control" />
                                        </div>
                                        <div className="col-lg-2 col-6">
                                            <select className="form-select">
                                                <option>Method</option>
                                                <option>Master card</option>
                                                <option>Visa card</option>
                                                <option>Paypal</option>
                                            </select>
                                        </div>
                                    </div>
                                </header>
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Transaction ID</th>
                                                <th>Paid</th>
                                                <th>Method</th>
                                                <th>Date</th>
                                                <th className="text-end">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><b>#456667</b></td>
                                                <td>$294.00</td>
                                                <td>
                                                    <div className="icontext">
                                                        <img className="icon border" src="assets/imgs/card-brands/1.png" alt="Payment" />
                                                        <span className="text text-muted">Amex</span>
                                                    </div>
                                                </td>
                                                <td>16.12.2020, 14:21</td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-sm btn-light font-sm rounded">Details</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>#134768</b></td>
                                                <td>$294.00</td>
                                                <td>
                                                    <div className="icontext">
                                                        <img className="icon border" src="assets/imgs/card-brands/2.png" alt="Payment" />
                                                        <span className="text text-muted">Master card</span>
                                                    </div>
                                                </td>
                                                <td>16.12.2020, 14:21</td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-sm btn-light font-sm rounded">Details</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>#134768</b></td>
                                                <td>$294.00</td>
                                                <td>
                                                    <div className="icontext">
                                                        <img className="icon border" src="assets/imgs/card-brands/3.png" alt="Payment" />
                                                        <span className="text text-muted">Paypal</span>
                                                    </div>
                                                </td>
                                                <td>16.12.2020, 14:21</td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-sm btn-light font-sm rounded">Details</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>#134768</b></td>
                                                <td>$294.00</td>
                                                <td>
                                                    <div className="icontext">
                                                        <img className="icon border" src="assets/imgs/card-brands/4.png" alt="Payment" />
                                                        <span className="text text-muted">Visa</span>
                                                    </div>
                                                </td>
                                                <td>16.12.2020, 14:21</td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-sm btn-light font-sm rounded">Details</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>#887780</b></td>
                                                <td>$294.00</td>
                                                <td>
                                                    <div className="icontext">
                                                        <img className="icon border" src="assets/imgs/card-brands/4.png" alt="Payment" />
                                                        <span className="text text-muted">Visa</span>
                                                    </div>
                                                </td>
                                                <td>16.12.2020, 14:21</td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-sm btn-light font-sm rounded">Details</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>#344556</b></td>
                                                <td>$294.00</td>
                                                <td>
                                                    <div className="icontext">
                                                        <img className="icon border" src="assets/imgs/card-brands/4.png" alt="Payment" />
                                                        <span className="text text-muted">Visa</span>
                                                    </div>
                                                </td>
                                                <td>16.12.2020, 14:21</td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-sm btn-light font-sm rounded">Details</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>#134768</b></td>
                                                <td>$294.00</td>
                                                <td>
                                                    <div className="icontext">
                                                        <img className="icon border" src="assets/imgs/card-brands/2.png" alt="Payment" />
                                                        <span className="text text-muted">Master card</span>
                                                    </div>
                                                </td>
                                                <td>16.12.2020, 14:21</td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-sm btn-light font-sm rounded">Details</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>#134768</b></td>
                                                <td>$294.00</td>
                                                <td>
                                                    <div className="icontext">
                                                        <img className="icon border" src="assets/imgs/card-brands/2.png" alt="Payment" />
                                                        <span className="text text-muted">Master card</span>
                                                    </div>
                                                </td>
                                                <td>16.12.2020, 14:21</td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-sm btn-light font-sm rounded">Details</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>#998784</b></td>
                                                <td>$294.00</td>
                                                <td>
                                                    <div className="icontext">
                                                        <img className="icon border" src="assets/imgs/card-brands/3.png" alt="Payment" />
                                                        <span className="text text-muted">Paypal</span>
                                                    </div>
                                                </td>
                                                <td>16.12.2020, 14:21</td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-sm btn-light font-sm rounded">Details</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>#556667</b></td>
                                                <td>$294.00</td>
                                                <td>
                                                    <div className="icontext">
                                                        <img className="icon border" src="assets/imgs/card-brands/3.png" alt="Payment" />
                                                        <span className="text text-muted">Paypal</span>
                                                    </div>
                                                </td>
                                                <td>16.12.2020, 14:21</td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-sm btn-light font-sm rounded">Details</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>#098989</b></td>
                                                <td>$294.00</td>
                                                <td>
                                                    <div className="icontext">
                                                        <img className="icon border" src="assets/imgs/card-brands/3.png" alt="Payment" />
                                                        <span className="text text-muted">Paypal</span>
                                                    </div>
                                                </td>
                                                <td>16.12.2020, 14:21</td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-sm btn-light font-sm rounded">Details</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>#134768</b></td>
                                                <td>$294.00</td>
                                                <td>
                                                    <div className="icontext">
                                                        <img className="icon border" src="assets/imgs/card-brands/4.png" alt="Payment" />
                                                        <span className="text text-muted">Visa</span>
                                                    </div>
                                                </td>
                                                <td>16.12.2020, 14:21</td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-sm btn-light font-sm rounded">Details</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            <aside className="col-lg-3">
                                <div className="box bg-light" style={{minHeight: "80%"}}>
                                    <h6 className="mt-15">Transaction Details</h6>
                                    <hr />
                                    <h6 className="mb-0">Suplier:</h6>
                                    <p>TemplateMount</p>
                                    <br />
                                    <h6 className="mb-0">Date:</h6>
                                    <p>December 19th, 2020</p>
                                    <br />
                                    <h6 className="mb-0">Billing address</h6>
                                    <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                                    <br />
                                    <h6 className="mb-0">VAT ID:</h6>
                                    <p>54741654160</p>
                                    <br />
                                    <h6 className="mb-0">Email:</h6>
                                    <p>support@example.com</p>
                                    <br />
                                    <h6 className="mb-0">Item purchased:</h6>
                                    <br />
                                    <p>
                                        <a href="#"> Adidas Air Jordan <i className="icons material-icons md-launch"></i> </a>
                                        <br />
                                        <a href="#"> Great product <i className="icons material-icons md-launch"></i> </a>
                                    </p>
                                    <br />
                                    <p>Payment: PayPal</p>
                                    <p className="h4">$457.14</p>
                                    <hr />
                                    <a className="btn btn-light" href="#"> Download receipe </a>
                                </div>
                            </aside>
                            
                        </div>
                    </div>
                </div>
                <div className="pagination-area mt-30 mb-50">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-start">
                            <li className="page-item active"><a className="page-link" href="#">01</a></li>
                            <li className="page-item"><a className="page-link" href="#">02</a></li>
                            <li className="page-item"><a className="page-link" href="#">03</a></li>
                            <li className="page-item"><a className="page-link dot" href="#">...</a></li>
                            <li className="page-item"><a className="page-link" href="#">16</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#"><i className="material-icons md-chevron_right"></i></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </DashboardLayout>
    )
}

export default Transaction2