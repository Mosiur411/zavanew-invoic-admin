import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import Pagination from '../../components/elements/Pagination'

function SellerList() {
    return (
        <DashboardLayout><section className="content-main">
            <div className="content-header">
                <h2 className="content-title">Sellers list</h2>
                <div>
                    <a href="#" className="btn btn-primary"><i className="material-icons md-plus"></i> Create new</a>
                </div>
            </div>
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
                                    <th>Seller</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Registered</th>
                                    <th className="text-end">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td width="40%">
                                        <a href="#" className="itemside">
                                            <div className="left">
                                                <img src="assets/imgs/people/avatar-1.png" className="img-sm img-avatar" alt="Userpic" />
                                            </div>
                                            <div className="info pl-3">
                                                <h6 className="mb-0 title">Eleanor Pena</h6>
                                                <small className="text-muted">Seller ID: #439</small>
                                            </div>
                                        </a>
                                    </td>
                                    <td>eleanor2020@example.com</td>
                                    <td><span className="badge rounded-pill alert-success">Active</span></td>
                                    <td>08.07.2020</td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">View details</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="40%">
                                        <a href="#" className="itemside">
                                            <div className="left">
                                                <img src="assets/imgs/people/avatar-2.png" className="img-sm img-avatar" alt="Userpic" />
                                            </div>
                                            <div className="info pl-3">
                                                <h6 className="mb-0 title">Mary Monasa</h6>
                                                <small className="text-muted">Seller ID: #129</small>
                                            </div>
                                        </a>
                                    </td>
                                    <td>monalisa@example.com</td>
                                    <td><span className="badge rounded-pill alert-success">Active</span></td>
                                    <td>11.07.2020</td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">View details</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="40%">
                                        <a href="#" className="itemside">
                                            <div className="left">
                                                <img src="assets/imgs/people/avatar-3.png" className="img-sm img-avatar" alt="Userpic" />
                                            </div>
                                            <div className="info pl-3">
                                                <h6 className="mb-0 title">Jonatan Ive</h6>
                                                <small className="text-muted">Seller ID: #400</small>
                                            </div>
                                        </a>
                                    </td>
                                    <td>mrjohn@example.com</td>
                                    <td><span className="badge rounded-pill alert-success">Active</span></td>
                                    <td>08.07.2020</td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">View details</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="40%">
                                        <a href="#" className="itemside">
                                            <div className="left">
                                                <img src="assets/imgs/people/avatar-4.png" className="img-sm img-avatar" alt="Userpic" />
                                            </div>
                                            <div className="info pl-3">
                                                <h6 className="mb-0 title">Eleanor Pena</h6>
                                                <small className="text-muted">Seller ID: #439</small>
                                            </div>
                                        </a>
                                    </td>
                                    <td>eleanor2020@example.com</td>
                                    <td><span className="badge rounded-pill alert-danger">Inactive</span></td>
                                    <td>08.07.2020</td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">View details</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="40%">
                                        <a href="#" className="itemside">
                                            <div className="left">
                                                <img src="assets/imgs/people/avatar-1.png" className="img-sm img-avatar" alt="Userpic" />
                                            </div>
                                            <div className="info pl-3">
                                                <h6 className="mb-0 title">Albert Pushkin</h6>
                                                <small className="text-muted">Seller ID: #439</small>
                                            </div>
                                        </a>
                                    </td>
                                    <td>someone@mymail.com</td>
                                    <td><span className="badge rounded-pill alert-success">Active</span></td>
                                    <td>20.11.2019</td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">View details</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="40%">
                                        <a href="#" className="itemside">
                                            <div className="left">
                                                <img src="assets/imgs/people/avatar-2.png" className="img-sm img-avatar" alt="Userpic" />
                                            </div>
                                            <div className="info pl-3">
                                                <h6 className="mb-0 title">Alexandra Pena</h6>
                                                <small className="text-muted">Seller ID: #439</small>
                                            </div>
                                        </a>
                                    </td>
                                    <td>eleanor2020@example.com</td>
                                    <td><span className="badge rounded-pill alert-danger">Inactive</span></td>
                                    <td>08.07.2020</td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">View details</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="40%">
                                        <a href="#" className="itemside">
                                            <div className="left">
                                                <img src="assets/imgs/people/avatar-3.png" className="img-sm img-avatar" alt="Userpic" />
                                            </div>
                                            <div className="info pl-3">
                                                <h6 className="mb-0 title">Eleanor Pena</h6>
                                                <small className="text-muted">Seller ID: #439</small>
                                            </div>
                                        </a>
                                    </td>
                                    <td>eleanor2020@example.com</td>
                                    <td><span className="badge rounded-pill alert-danger">Inactive</span></td>
                                    <td>08.07.2020</td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">View details</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="40%">
                                        <a href="#" className="itemside">
                                            <div className="left">
                                                <img src="assets/imgs/people/avatar-4.png" className="img-sm img-avatar" alt="Userpic" />
                                            </div>
                                            <div className="info pl-3">
                                                <h6 className="mb-0 title">Alex Pushkina</h6>
                                                <small className="text-muted">Seller ID: #439</small>
                                            </div>
                                        </a>
                                    </td>
                                    <td>alex@gmail.org</td>
                                    <td><span className="badge rounded-pill alert-success">Active</span></td>
                                    <td>08.07.2020</td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">View details</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="40%">
                                        <a href="#" className="itemside">
                                            <div className="left">
                                                <img src="assets/imgs/people/avatar-1.png" className="img-sm img-avatar" alt="Userpic" />
                                            </div>
                                            <div className="info pl-3">
                                                <h6 className="mb-0 title">Eleanor Pena</h6>
                                                <small className="text-muted">Seller ID: #439</small>
                                            </div>
                                        </a>
                                    </td>
                                    <td>eleanor2020@example.com</td>
                                    <td><span className="badge rounded-pill alert-success">Active</span></td>
                                    <td>08.07.2020</td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">View details</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="40%">
                                        <a href="#" className="itemside">
                                            <div className="left">
                                                <img src="assets/imgs/people/avatar-2.png" className="img-sm img-avatar" alt="Userpic" />
                                            </div>
                                            <div className="info pl-3">
                                                <h6 className="mb-0 title">Eleanor Pena</h6>
                                                <small className="text-muted">Seller ID: #439</small>
                                            </div>
                                        </a>
                                    </td>
                                    <td>eleanor2020@example.com</td>
                                    <td><span className="badge rounded-pill alert-success">Active</span></td>
                                    <td>08.07.2020</td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">View details</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Pagination />
        </section></DashboardLayout>
    )
}

export default SellerList