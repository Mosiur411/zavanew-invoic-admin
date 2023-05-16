import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import Pagination from '../../components/elements/Pagination'
import SingleProductGrid from '../../components/elements/product/SingleProductGrid'
function Grid() {
    return (
        <DashboardLayout>
            <section className="content-main">
                <div className="content-header">
                    <div>
                        <h2 className="content-title card-title">Products grid</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div>
                        <a href="#" className="btn btn-light rounded font-md">Export</a>
                        <a href="#" className="btn btn-light rounded font-md">Import</a>
                        <a href="#" className="btn btn-primary btn-sm rounded">Create new</a>
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
                                    <option>All category</option>
                                    <option>Electronics</option>
                                    <option>Clothings</option>
                                    <option>Something else</option>
                                </select>
                            </div>
                            <div className="col-lg-2 col-6 col-md-3">
                                <select className="form-select">
                                    <option>Latest added</option>
                                    <option>Cheap first</option>
                                    <option>Most viewed</option>
                                </select>
                            </div>
                        </div>
                    </header>
                    <div className="card-body">
                        <div className="row gx-3 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 row-cols-xxl-5">
                            <SingleProductGrid />
                            <SingleProductGrid />
                            <SingleProductGrid />
                            <SingleProductGrid />
                            <SingleProductGrid />

                        </div>
                    </div>
                </div>
                <Pagination />
            </section>



        </DashboardLayout>
    )
}

export default Grid