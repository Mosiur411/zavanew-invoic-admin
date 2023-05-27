import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import Pagination from '../../components/elements/Pagination'
import SingleProductgrid2 from '../../components/elements/product/SingleProductgrid2'

function Grid2() {
    return (
        <DashboardLayout>
            <section className="content-main">
                <div className="content-header">
                    <div>
                        <h2 className="content-title card-title">Products grid</h2>
                        <p></p>
                    </div>
                    <div>
                        <a href="#" className="btn btn-light rounded font-md">Export</a>
                        <a href="#" className="btn btn-light rounded font-md">Import</a>
                        <a href="#" className="btn btn-primary btn-sm rounded">Create new</a>
                    </div>
                </div>
                <header className="card card-body mb-4">
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
                <div className="row">
                    <SingleProductgrid2/>
                    <SingleProductgrid2/>
                    <SingleProductgrid2/>
                    <SingleProductgrid2/>
                </div>
                <Pagination/>
            </section>
        </DashboardLayout>
    )
}

export default Grid2