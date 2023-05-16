import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'

function AddProduct2() {
    return (
        <DashboardLayout>
            <section className="content-main">
                <div className="row">
                    <div className="col-6">
                        <div className="content-header">
                            <h2 className="content-title">Add New Product</h2>
                            <div>
                                <button className="btn btn-light rounded font-sm mr-5 text-body hover-up">Save to draft</button>
                                <button className="btn btn-md rounded font-sm hover-up">Publich</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h6>1. General info</h6>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="mb-4">
                                            <label className="form-label">Product title</label>
                                            <input type="text" placeholder="Type here" className="form-control" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">Description</label>
                                            <textarea placeholder="Type here" className="form-control" rows="4"></textarea>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">Brand name</label>
                                            <select className="form-select">
                                                <option> Adidas </option>
                                                <option> Nike </option>
                                                <option> Puma </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <hr className="mb-4 mt-0" />
                                <div className="row">
                                    <div className="col-md-3">
                                        <h6>2. Pricing</h6>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="mb-4">
                                            <label className="form-label">Cost in USD</label>
                                            <input type="text" placeholder="$00.0" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <hr className="mb-4 mt-0" />
                                <div className="row">
                                    <div className="col-md-3">
                                        <h6>3. Category</h6>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="mb-4">
                                            <label className="mb-2 form-check form-check-inline" style={{width: '45%'}}>
                                                <input className="form-check-input" checked="" name="mycategory" type="radio" />
                                                <span className="form-check-label"> Clothes </span>
                                            </label>
                                            <label className="mb-2 form-check form-check-inline" style={{width: '45%'}}>
                                                <input className="form-check-input" name="mycategory" type="radio" />
                                                <span className="form-check-label"> Electronics </span>
                                            </label>
                                            <label className="mb-2 form-check form-check-inline" style={{width: '45%'}}>
                                                <input className="form-check-input" name="mycategory" type="radio" />
                                                <span className="form-check-label"> Sports </span>
                                            </label>
                                            <label className="mb-2 form-check form-check-inline" style={{width: '45%'}}>
                                                <input className="form-check-input" name="mycategory" type="radio" />
                                                <span className="form-check-label"> Automobiles </span>
                                            </label>
                                            <label className="mb-2 form-check form-check-inline" style={{width: '45%'}}>
                                                <input className="form-check-input" name="mycategory" type="radio" />
                                                <span className="form-check-label"> Home interior </span>
                                            </label>
                                            <label className="mb-2 form-check form-check-inline" style={{width: '45%'}}>
                                                <input className="form-check-input" name="mycategory" type="radio" />
                                                <span className="form-check-label"> Smartphones </span>
                                            </label>
                                            <label className="mb-2 form-check form-check-inline" style={{width: '45%'}}>
                                                <input className="form-check-input" name="mycategory" type="radio" />
                                                <span className="form-check-label"> Books </span>
                                            </label>
                                            <label className="mb-2 form-check form-check-inline" style={{width: '45%'}}>
                                                <input className="form-check-input" name="mycategory" type="radio" />
                                                <span className="form-check-label"> Kids item </span>
                                            </label>
                                            <label className="mb-2 form-check form-check-inline" style={{width: '45%'}}>
                                                <input className="form-check-input" name="mycategory" type="radio" />
                                                <span className="form-check-label"> Others </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <hr className="mb-4 mt-0" />
                                <div className="row">
                                    <div className="col-md-3">
                                        <h6>4. Media</h6>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="mb-4">
                                            <label className="form-label">Images</label>
                                            <input className="form-control" type="file" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </DashboardLayout >
    )
}

export default AddProduct2