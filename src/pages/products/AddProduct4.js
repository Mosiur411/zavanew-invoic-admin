import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'

function AddProduct4() {
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
                    <div className="col-9">
                        <div className="card">
                            <div className="card-body">
                                <div className="row gx-5">
                                    <aside className="col-lg-3 border-end">
                                        <nav className="nav nav-pills flex-column mb-4">
                                            <a className="nav-link active" aria-current="page" href="#">General</a>
                                            <a className="nav-link" href="#">Catgeory info</a>
                                            <a className="nav-link" href="#">Pricing</a>
                                            <a className="nav-link" href="#">Images</a>
                                            <a className="nav-link" href="#">SEO keywords</a>
                                            <a className="nav-link" href="#">Related items</a>
                                        </nav>
                                    </aside>
                                    <div className="col-lg-9">
                                        <section className="content-body p-xl-4">
                                            <form>
                                                <div className="row mb-4">
                                                    <label className="col-lg-3 col-form-label">Product name*</label>
                                                    <div className="col-lg-9">
                                                        <input type="text" className="form-control" placeholder="Type here" />
                                                    </div>

                                                </div>

                                                <div className="row mb-4">
                                                    <label className="col-lg-3 col-form-label">Description*</label>
                                                    <div className="col-lg-9">
                                                        <textarea className="form-control" placeholder="Type here" rows="4"></textarea>
                                                    </div>

                                                </div>

                                                <div className="row mb-4">
                                                    <label className="col-lg-3 col-form-label">Brand</label>
                                                    <div className="col-lg-4">
                                                        <small className="text-muted font-sm mb-10">Multiselect: Cmd+click</small>
                                                        <select multiple size="4" className="form-control select-multiple">
                                                            <option>Adidas</option>
                                                            <option>Puma</option>
                                                            <option>Apple</option>
                                                            <option>Toyota</option>
                                                            <option>Toshiba</option>
                                                            <option>Artel</option>
                                                        </select>
                                                    </div>

                                                </div>

                                                <div className="row mb-4">
                                                    <label className="col-lg-3 col-form-label">Tax ID</label>
                                                    <div className="col-lg-4">
                                                        <input type="number" className="form-control" placeholder="012345678" />
                                                    </div>

                                                </div>

                                                <div className="row mb-4">
                                                    <label className="col-lg-3 col-form-label">Related tags</label>
                                                    <div className="col-lg-4">
                                                        <input type="text" className="form-control" placeholder="Type" />
                                                    </div>

                                                </div>

                                                <div className="row mb-4">
                                                    <label className="col-lg-3 col-form-label">Status</label>
                                                    <div className="col-lg-9">
                                                        <label className="form-check my-2">
                                                            <input type="checkbox" className="form-check-input" checked="" />
                                                            <span className="form-check-label">Enable this product </span>
                                                        </label>
                                                    </div>

                                                </div>

                                                <br />
                                                <button className="btn btn-primary" type="submit">Continue to next</button>
                                            </form>
                                        </section>
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

export default AddProduct4