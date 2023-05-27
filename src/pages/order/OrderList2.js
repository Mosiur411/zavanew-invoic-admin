import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import Pagination from '../../components/elements/Pagination'

function OrderList2() {
    return (
        <DashboardLayout>
            <section className="content-main">
                <div className="content-header">
                    <div>
                        <h2 className="content-title card-title">Order List</h2>
                        <p></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9">
                        <div className="card mb-4">
                            <header className="card-header">
                                <div className="row gx-3">
                                    <div className="col-lg-4 col-md-6 me-auto">
                                        <input type="text" placeholder="Search..." className="form-control" />
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-6">
                                        <select className="form-select">
                                            <option>Status</option>
                                            <option>Active</option>
                                            <option>Disabled</option>
                                            <option>Show all</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-6">
                                        <select className="form-select">
                                            <option>Show 20</option>
                                            <option>Show 30</option>
                                            <option>Show 40</option>
                                        </select>
                                    </div>
                                </div>
                            </header>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Customer name</th>
                                                <th>Price</th>
                                                <th>Status</th>
                                                <th>Date</th>
                                                <th className="text-end">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>452</td>
                                                <td><b>Devon Lane</b></td>
                                                <td>$948.55</td>
                                                <td><span className="badge rounded-pill alert-success">Received</span></td>
                                                <td>07.05.2020</td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-md rounded font-sm">Detail</a>
                                                    <div className="dropdown">
                                                        <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">View detail</a>
                                                            <a className="dropdown-item" href="#">Edit info</a>
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>789</td>
                                                <td><b>Guy Hawkins</b></td>
                                                <td>$0.00</td>
                                                <td><span className="badge rounded-pill alert-danger">Cancelled</span></td>
                                                <td>25.05.2020</td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-md rounded font-sm">Detail</a>
                                                    <div className="dropdown">
                                                        <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">View detail</a>
                                                            <a className="dropdown-item" href="#">Edit info</a>
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>478</td>
                                                <td><b>Leslie Alexander</b></td>
                                                <td>$293.01</td>
                                                <td><span className="badge rounded-pill alert-warning">Pending</span></td>
                                                <td>18.05.2020</td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-md rounded font-sm">Detail</a>
                                                    <div className="dropdown">
                                                        <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">View detail</a>
                                                            <a className="dropdown-item" href="#">Edit info</a>
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>589</td>
                                                <td><b>Albert Flores</b></td>
                                                <td>$105.55</td>
                                                <td><span className="badge rounded-pill alert-warning">Pending</span></td>
                                                <td>07.02.2020</td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-md rounded font-sm">Detail</a>
                                                    <div className="dropdown">
                                                        <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">View detail</a>
                                                            <a className="dropdown-item" href="#">Edit info</a>
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>345</td>
                                                <td><b>Eleanor Pena</b></td>
                                                <td>$779.58</td>
                                                <td><span className="badge rounded-pill alert-success">Received</span></td>
                                                <td>18.03.2020</td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-md rounded font-sm">Detail</a>
                                                    <div className="dropdown">
                                                        <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">View detail</a>
                                                            <a className="dropdown-item" href="#">Edit info</a>
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>456</td>
                                                <td><b>Dianne Russell</b></td>
                                                <td>$576.28</td>
                                                <td><span className="badge rounded-pill alert-success">Received</span></td>
                                                <td>23.04.2020</td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-md rounded font-sm">Detail</a>
                                                    <div className="dropdown">
                                                        <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">View detail</a>
                                                            <a className="dropdown-item" href="#">Edit info</a>
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>768</td>
                                                <td><b>Savannah Nguyen</b></td>
                                                <td>$589.99</td>
                                                <td><span className="badge rounded-pill alert-success">Received</span></td>
                                                <td>18.05.2020</td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-md rounded font-sm">Detail</a>
                                                    <div className="dropdown">
                                                        <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">View detail</a>
                                                            <a className="dropdown-item" href="#">Edit info</a>
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>977</td>
                                                <td><b>Kathryn Murphy</b></td>
                                                <td>$169.43</td>
                                                <td><span className="badge rounded-pill alert-success">Received</span></td>
                                                <td>23.03.2020</td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-md rounded font-sm">Detail</a>
                                                    <div className="dropdown">
                                                        <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">View detail</a>
                                                            <a className="dropdown-item" href="#">Edit info</a>
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>687</td>
                                                <td><b>Jacob Jones</b></td>
                                                <td>$219.78</td>
                                                <td><span className="badge rounded-pill alert-success">Received</span></td>
                                                <td>07.05.2020</td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-md rounded font-sm">Detail</a>
                                                    <div className="dropdown">
                                                        <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">View detail</a>
                                                            <a className="dropdown-item" href="#">Edit info</a>
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>688</td>
                                                <td><b>Jacob Jones</b></td>
                                                <td>$219.78</td>
                                                <td><span className="badge rounded-pill alert-success">Received</span></td>
                                                <td>07.05.2020</td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-md rounded font-sm">Detail</a>
                                                    <div className="dropdown">
                                                        <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">View detail</a>
                                                            <a className="dropdown-item" href="#">Edit info</a>
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>

                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="col-md-3">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="mb-3">Filter by</h5>
                                <form>
                                    <div className="mb-4">
                                        <label htmlFor="order_id" className="form-label">Order ID</label>
                                        <input type="text" placeholder="Type here" className="form-control" id="order_id" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="order_customer" className="form-label">Customer</label>
                                        <input type="text" placeholder="Type here" className="form-control" id="order_customer" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Order Status</label>
                                        <select className="form-select">
                                            <option>Published</option>
                                            <option>Draft</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="order_total" className="form-label">Total</label>
                                        <input type="text" placeholder="Type here" className="form-control" id="order_total" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="order_created_date" className="form-label">Date Added</label>
                                        <input type="text" placeholder="Type here" className="form-control" id="order_created_date" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="order_modified_date" className="form-label">Date Modified</label>
                                        <input type="text" placeholder="Type here" className="form-control" id="order_modified_date" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="order_customer_1" className="form-label">Customer</label>
                                        <input type="text" placeholder="Type here" className="form-control" id="order_customer_1" />
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
                <Pagination />
            </section>
        </DashboardLayout>
    )
}

export default OrderList2