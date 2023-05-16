import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import Pagination from '../../components/elements/Pagination'

function SellerCard() {
    return (
        <DashboardLayout>
            <section className="content-main">
                <div className="content-header">
                    <h2 className="content-title">Sellers cards</h2>
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
                            <div className="col-lg-2 col-6 col-md-3">
                                <select className="form-select">
                                    <option>Show 20</option>
                                    <option>Show 30</option>
                                    <option>Show 40</option>
                                    <option>Show all</option>
                                </select>
                            </div>
                            <div className="col-lg-2 col-6 col-md-3">
                                <select className="form-select">
                                    <option>Status: all</option>
                                    <option>Active only</option>
                                    <option>Disabled</option>
                                </select>
                            </div>
                        </div>
                    </header>
                    <div className="card-body">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                            <div className="col">
                                <div className="card card-user">
                                    <div className="card-header">
                                        <img className="img-md img-avatar" src="assets/imgs/people/avatar-1.png" alt="User pic" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title mt-50">Mary Sandra</h5>
                                        <div className="card-text text-muted">
                                            <p className="m-0">Seller ID: #409</p>
                                            <p>mary90@example.com</p>
                                            <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">View details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col">
                                <div className="card card-user">
                                    <div className="card-header">
                                        <img className="img-md img-avatar" src="assets/imgs/people/avatar-2.png" alt="User pic" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title mt-50">Leslie Alexander</h5>
                                        <div className="card-text text-muted">
                                            <p className="m-0">Seller ID: #478</p>
                                            <p>leslie@example.com</p>
                                            <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">View details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col">
                                <div className="card card-user">
                                    <div className="card-header">
                                        <img className="img-md img-avatar" src="assets/imgs/people/avatar-3.png" alt="User pic" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title mt-50">Leslie Alexander</h5>
                                        <div className="card-text text-muted">
                                            <p className="m-0">Seller ID: #478</p>
                                            <p>leslie@example.com</p>
                                            <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">View details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col">
                                <div className="card card-user">
                                    <div className="card-header">
                                        <img className="img-md img-avatar" src="assets/imgs/people/avatar-4.png" alt="User pic" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title mt-50">Floyd Miles</h5>
                                        <div className="card-text text-muted">
                                            <p className="m-0">Seller ID: #171</p>
                                            <p>fedor12@example.com</p>
                                            <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">View details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col">
                                <div className="card card-user">
                                    <div className="card-header">
                                        <img className="img-md img-avatar" src="assets/imgs/people/avatar-1.png" alt="User pic" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title mt-50">John Alexander</h5>
                                        <div className="card-text text-muted">
                                            <p className="m-0">Seller ID: #987</p>
                                            <p>john@mymail.com</p>
                                            <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">View details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col">
                                <div className="card card-user">
                                    <div className="card-header">
                                        <img className="img-md img-avatar" src="assets/imgs/people/avatar-3.png" alt="User pic" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title mt-50">Albert Flores</h5>
                                        <div className="card-text text-muted">
                                            <p className="m-0">Seller ID: #478</p>
                                            <p>leslie@example.com</p>
                                            <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">View details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col">
                                <div className="card card-user">
                                    <div className="card-header">
                                        <img className="img-md img-avatar" src="assets/imgs/people/avatar-4.png" alt="User pic" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title mt-50">Leslie Alexander</h5>
                                        <div className="card-text text-muted">
                                            <p className="m-0">Seller ID: #478</p>
                                            <p>leslie@example.com</p>
                                            <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">View details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col">
                                <div className="card card-user">
                                    <div className="card-header">
                                        <img className="img-md img-avatar" src="assets/imgs/people/avatar-1.png" alt="User pic" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title mt-50">Marx Alberto</h5>
                                        <div className="card-text text-muted">
                                            <p className="m-0">Seller ID: #478</p>
                                            <p>leslie@example.com</p>
                                            <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">View details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Pagination/>
            </section>

        </DashboardLayout>
    )
}

export default SellerCard