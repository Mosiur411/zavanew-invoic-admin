import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'

function AddProduct1() {
    return (
        <DashboardLayout>
            <section className="content-main">
                <div className="row">
                    <div className="col-9">
                        <div className="content-header">
                            <h2 className="content-title">Add New Product</h2>
                            <div>
                                <button className="btn btn-light rounded font-sm mr-5 text-body hover-up">Save to draft</button>
                                <button className="btn btn-md rounded font-sm hover-up">Publich</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card mb-4">
                            <div className="card-header">
                                <h4>Basic</h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-4">
                                        <label htmlFor="product_name" className="form-label">Product title</label>
                                        <input type="text" placeholder="Type here" className="form-control" id="product_name" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Full description</label>
                                        <textarea placeholder="Type here" className="form-control" rows="4"></textarea>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="mb-4">
                                                <label className="form-label">Regular price</label>
                                                <div className="row gx-2">
                                                    <input placeholder="$" type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mb-4">
                                                <label className="form-label">Promotional price</label>
                                                <input placeholder="$" type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <label className="form-label">Currency</label>
                                            <select className="form-select">
                                                <option>USD</option>
                                                <option>EUR</option>
                                                <option>RUBL</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Tax rate</label>
                                        <input type="text" placeholder="%" className="form-control" id="product_name" />
                                    </div>
                                    <label className="form-check mb-4">
                                        <input className="form-check-input" type="checkbox" defaultValue="" />
                                        <span className="form-check-label"> Make a template </span>
                                    </label>
                                </form>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-header">
                                <h4>Shipping</h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="mb-4">
                                                <label htmlFor="product_name" className="form-label">Width</label>
                                                <input type="text" placeholder="inch" className="form-control" id="product_name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="mb-4">
                                                <label htmlFor="product_name" className="form-label">Height</label>
                                                <input type="text" placeholder="inch" className="form-control" id="product_name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_name" className="form-label">Weight</label>
                                        <input type="text" placeholder="gam" className="form-control" id="product_name" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_name" className="form-label">Shipping fees</label>
                                        <input type="text" placeholder="$" className="form-control" id="product_name" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card mb-4">
                            <div className="card-header">
                                <h4>Media</h4>
                            </div>
                            <div className="card-body">
                                <div className="input-upload">
                                    <img src="assets/imgs/theme/upload.svg" alt="" />
                                    <input className="form-control" type="file" />
                                </div>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-header">
                                <h4>Organization</h4>
                            </div>
                            <div className="card-body">
                                <div className="row gx-2">
                                    <div className="col-sm-6 mb-3">
                                        <label className="form-label">Category</label>
                                        <select className="form-select">
                                            <option>Automobiles</option>
                                            <option>Home items</option>
                                            <option>Electronics</option>
                                            <option>Smartphones</option>
                                            <option>Sport items</option>
                                            <option>Baby and Tous</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <label className="form-label">Sub-category</label>
                                        <select className="form-select">
                                            <option>Nissan</option>
                                            <option>Honda</option>
                                            <option>Mercedes</option>
                                            <option>Chevrolet</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_name" className="form-label">Tags</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





        </DashboardLayout>
    )
}

export default AddProduct1