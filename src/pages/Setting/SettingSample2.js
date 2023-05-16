import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'

function SettingSample2() {
    return (
        <DashboardLayout>
            <section className="content-main">
                <div className="content-header">
                    <h2 className="content-title">Site settings</h2>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="row gx-5">
                            <aside className="col-lg-3 border-end">
                                <nav className="nav nav-pills flex-lg-column mb-4">
                                    <a className="nav-link active" aria-current="page" href="#">General</a>
                                    <a className="nav-link" href="#">Moderators</a>
                                    <a className="nav-link" href="#">Admin account</a>
                                    <a className="nav-link" href="#">SEO settings</a>
                                    <a className="nav-link" href="#">Mail settings</a>
                                    <a className="nav-link" href="#">Newsletter</a>
                                </nav>
                            </aside>
                            <div className="col-lg-9">
                                <section className="content-body p-xl-4">
                                    <form>
                                        <div className="row border-bottom mb-4 pb-4">
                                            <div className="col-md-5">
                                                <h5>Website name</h5>
                                                <p className="text-muted" style={{maxWidth: "90%"}}>Supported languages of all pages including each product lorem ipsum dolor sit amet, consectetur adipisicing</p>
                                            </div>
                                            
                                            <div className="col-md-7">
                                                <div className="mb-3">
                                                    <label className="form-label">Home page title</label>
                                                    <input className="form-control" type="text" name="" placeholder="Type here" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Description</label>
                                                    <textarea type="text" className="form-control"></textarea>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                        <div className="row border-bottom mb-4 pb-4">
                                            <div className="col-md-5">
                                                <h5>Access</h5>
                                                <p className="text-muted" style={{maxWidth: "90%"}}>Give access of all pages including each product lorem ipsum dolor sit amet, consectetur adipisicing</p>
                                            </div>
                                            
                                            <div className="col-md-7">
                                                <label className="mb-2 form-check">
                                                    <input className="form-check-input" checked="" name="mycheck_a1" type="radio" />
                                                    <span className="form-check-label"> All registration is enabled </span>
                                                </label>
                                                <label className="mb-2 form-check">
                                                    <input className="form-check-input" name="mycheck_a1" type="radio" />
                                                    <span className="form-check-label"> Only buyers is enabled </span>
                                                </label>
                                                <label className="mb-2 form-check">
                                                    <input className="form-check-input" name="mycheck_a1" type="radio" />
                                                    <span className="form-check-label"> Only buyers is enabled </span>
                                                </label>
                                                <label className="mb-2 form-check">
                                                    <input className="form-check-input" name="mycheck_a1" type="radio" />
                                                    <span className="form-check-label"> Stop new shop registration </span>
                                                </label>
                                            </div>
                                            
                                        </div>
                                        
                                        <div className="row border-bottom mb-4 pb-4">
                                            <div className="col-md-5">
                                                <h5>Notification</h5>
                                                <p className="text-muted" style={{maxWidth: "90%"}}>Lorem ipsum dolor sit amet, consectetur adipisicing something about this</p>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="form-check mb-3">
                                                    <input className="form-check-input" type="checkbox" defaultValue="" id="mycheck_notify" checked />
                                                    <label className="form-check-label" htmlFor="mycheck_notify"> Send notification on each user registration </label>
                                                </div>
                                                <div className="mb-3">
                                                    <input className="form-control" placeholder="Text" />
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                        <div className="row border-bottom mb-4 pb-4">
                                            <div className="col-md-5">
                                                <h5>Currency</h5>
                                                <p className="text-muted" style={{maxWidth: "90%"}}>Lorem ipsum dolor sit amet, consectetur adipisicing something about this</p>
                                            </div>
                                            
                                            <div className="col-md-7">
                                                <div className="mb-3" style={{maxWidth: "200px"}}>
                                                    <label className="form-label">Main currency </label>
                                                    <select className="form-select">
                                                        <option>US Dollar</option>
                                                        <option>EU Euro</option>
                                                        <option>RU Ruble</option>
                                                        <option>UZ Som</option>
                                                    </select>
                                                </div>
                                                <div className="mb-3" style={{maxWidth: "200px"}}>
                                                    <label className="form-label">Supported curencies</label>
                                                    <select className="form-select">
                                                        <option>US dollar</option>
                                                        <option>RUBG russia</option>
                                                        <option>INR india</option>
                                                    </select>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                        <button className="btn btn-primary" type="submit">Save all changes</button> &nbsp;
                                        <button className="btn btn-light rounded font-md" type="reset">Reset</button>
                                    </form>
                                </section>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
            </section>

        </DashboardLayout>
    )
}

export default SettingSample2