import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import Pagination from '../../components/elements/Pagination'

function SellerProfile() {
    return (
        <DashboardLayout>
            <section className="content-main">
                <div className="content-header">
                    <a href="javascript:history.back()"><i className="material-icons md-arrow_back"></i> Go back </a>
                </div>
                <div className="card mb-4">
                    <div className="card-header bg-brand-2" style={{height: "150px"}}></div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-xl col-lg flex-grow-0" style={{flexBasis: "230px"}}>
                                <div className="img-thumbnail shadow w-100 bg-white position-relative text-center" style={{height: "190px", width: "200px", marginTop: "-120px"}}>
                                    <img src="assets/imgs/brands/vendor-2.png" className="center-xy img-fluid" alt="Logo Brand" />
                                </div>
                            </div>
                            
                            <div className="col-xl col-lg">
                                <h3>Noodles Co.</h3>
                                <p>3891 Ranchview Dr. Richardson, California 62639</p>
                            </div>
                            
                            <div className="col-xl-4 text-md-end">
                                <select className="form-select w-auto d-inline-block">
                                    <option>Actions</option>
                                    <option>Disable shop</option>
                                    <option>Analyze</option>
                                    <option>Something</option>
                                </select>
                                <a href="#" className="btn btn-primary"> View live <i className="material-icons md-launch"></i> </a>
                            </div>
                            
                        </div>
                        
                        <hr className="my-4" />
                        <div className="row g-4">
                            <div className="col-md-12 col-lg-4 col-xl-2">
                                <article className="box">
                                    <p className="mb-0 text-muted">Total sales:</p>
                                    <h5 className="text-success">238</h5>
                                    <p className="mb-0 text-muted">Revenue:</p>
                                    <h5 className="text-success mb-0">$2380</h5>
                                </article>
                            </div>
                            
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <h6>Contacts</h6>
                                <p>
                                    Manager: Jerome Bell <br />
                                    info@example.com <br />
                                    (229) 555-0109, (808) 555-0111
                                </p>
                            </div>
                            
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <h6>Address</h6>
                                <p>
                                    Country: California <br />
                                    Address: Ranchview Dr. Richardson <br />
                                    Postal code: 62639
                                </p>
                            </div>
                            
                            <div className="col-sm-6 col-xl-4 text-xl-end">
                                <map className="mapbox position-relative d-inline-block">
                                    <img src="assets/imgs/misc/map.jpg" className="rounded2" height="120" alt="map" />
                                    <span className="map-pin" style={{top: "50px", left: "100px"}}></span>
                                    <button className="btn btn-sm btn-brand position-absolute bottom-0 end-0 mb-15 mr-15 font-xs">Large</button>
                                </map>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
                <div className="card mb-4">
                    <div className="card-body">
                        <h3 className="card-title">Products by seller</h3>
                        <div className="row">
                            <div className="col-xl-2 col-lg-3 col-md-6">
                                <div className="card card-product-grid">
                                    <a href="#" className="img-wrap"> <img src="assets/imgs/items/1.jpg" alt="Product" /> </a>
                                    <div className="info-wrap">
                                        <a href="#" className="title">Product name</a>
                                        <div className="price mt-1">$179.00</div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xl-2 col-lg-3 col-md-6">
                                <div className="card card-product-grid">
                                    <a href="#" className="img-wrap"> <img src="assets/imgs/items/2.jpg" alt="Product" /> </a>
                                    <div className="info-wrap">
                                        <a href="#" className="title">Product name</a>
                                        <div className="price mt-1">$179.00</div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xl-2 col-lg-3 col-md-6">
                                <div className="card card-product-grid">
                                    <a href="#" className="img-wrap"> <img src="assets/imgs/items/3.jpg" alt="Product" /> </a>
                                    <div className="info-wrap">
                                        <a href="#" className="title">All Natural Italian-Style</a>
                                        <div className="price mt-1">$179.00</div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xl-2 col-lg-3 col-md-6">
                                <div className="card card-product-grid">
                                    <a href="#" className="img-wrap"> <img src="assets/imgs/items/4.jpg" alt="Product" /> </a>
                                    <div className="info-wrap">
                                        <a href="#" className="title">Boomchick apop Sweet & Salty</a>
                                        <div className="price mt-1">$179.00</div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xl-2 col-lg-3 col-md-6">
                                <div className="card card-product-grid">
                                    <a href="#" className="img-wrap"> <img src="assets/imgs/items/5.jpg" alt="Product" /> </a>
                                    <div className="info-wrap">
                                        <a href="#" className="title">Product name</a>
                                        <div className="price mt-1">$179.00</div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xl-2 col-lg-3 col-md-6">
                                <div className="card card-product-grid">
                                    <a href="#" className="img-wrap"> <img src="assets/imgs/items/6.jpg" alt="Product" /> </a>
                                    <div className="info-wrap">
                                        <a href="#" className="title">Product name</a>
                                        <div className="price mt-1">$179.00</div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xl-2 col-lg-3 col-md-6">
                                <div className="card card-product-grid">
                                    <a href="#" className="img-wrap"> <img src="assets/imgs/items/7.jpg" alt="Product" /> </a>
                                    <div className="info-wrap">
                                        <a href="#" className="title">Product name</a>
                                        <div className="price mt-1">$179.00</div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xl-2 col-lg-3 col-md-6">
                                <div className="card card-product-grid">
                                    <a href="#" className="img-wrap"> <img src="assets/imgs/items/8.jpg" alt="Product" /> </a>
                                    <div className="info-wrap">
                                        <a href="#" className="title">Apple Airpods CB-133</a>
                                        <div className="price mt-1">$179.00</div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xl-2 col-lg-3 col-md-6">
                                <div className="card card-product-grid">
                                    <a href="#" className="img-wrap"> <img src="assets/imgs/items/9.jpg" alt="Product" /> </a>
                                    <div className="info-wrap">
                                        <a href="#" className="title">Product name</a>
                                        <div className="price mt-1">$179.00</div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xl-2 col-lg-3 col-md-6">
                                <div className="card card-product-grid">
                                    <a href="#" className="img-wrap"> <img src="assets/imgs/items/10.jpg" alt="Product" /> </a>
                                    <div className="info-wrap">
                                        <a href="#" className="title">Product name</a>
                                        <div className="price mt-1">$179.00</div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xl-2 col-lg-3 col-md-6">
                                <div className="card card-product-grid">
                                    <a href="#" className="img-wrap"> <img src="assets/imgs/items/11.jpg" alt="Product" /> </a>
                                    <div className="info-wrap">
                                        <a href="#" className="title">All Natural Italian-Style</a>
                                        <div className="price mt-1">$179.00</div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xl-2 col-lg-3 col-md-6">
                                <div className="card card-product-grid">
                                    <a href="#" className="img-wrap"> <img src="assets/imgs/items/12.jpg" alt="Product" /> </a>
                                    <div className="info-wrap">
                                        <a href="#" className="title">Boomchick apop Sweet & Salty</a>
                                        <div className="price mt-1">$179.00</div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xl-2 col-lg-3 col-md-6">
                                <div className="card card-product-grid">
                                    <a href="#" className="img-wrap"> <img src="assets/imgs/items/1.jpg" alt="Product" /> </a>
                                    <div className="info-wrap">
                                        <a href="#" className="title">Product name</a>
                                        <div className="price mt-1">$179.00</div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xl-2 col-lg-3 col-md-6">
                                <div className="card card-product-grid">
                                    <a href="#" className="img-wrap"> <img src="assets/imgs/items/2.jpg" alt="Product" /> </a>
                                    <div className="info-wrap">
                                        <a href="#" className="title">Product name</a>
                                        <div className="price mt-1">$179.00</div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xl-2 col-lg-3 col-md-6">
                                <div className="card card-product-grid">
                                    <a href="#" className="img-wrap"> <img src="assets/imgs/items/3.jpg" alt="Product" /> </a>
                                    <div className="info-wrap">
                                        <a href="#" className="title">All Natural Italian-Style</a>
                                        <div className="price mt-1">$179.00</div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xl-2 col-lg-3 col-md-6">
                                <div className="card card-product-grid">
                                    <a href="#" className="img-wrap"> <img src="assets/imgs/items/4.jpg" alt="Product" /> </a>
                                    <div className="info-wrap">
                                        <a href="#" className="title">Boomchick apop Sweet & Salty</a>
                                        <div className="price mt-1">$179.00</div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xl-2 col-lg-3 col-md-6">
                                <div className="card card-product-grid">
                                    <a href="#" className="img-wrap"> <img src="assets/imgs/items/5.jpg" alt="Product" /> </a>
                                    <div className="info-wrap">
                                        <a href="#" className="title">Product name</a>
                                        <div className="price mt-1">$179.00</div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xl-2 col-lg-3 col-md-6">
                                <div className="card card-product-grid">
                                    <a href="#" className="img-wrap"> <img src="assets/imgs/items/6.jpg" alt="Product" /> </a>
                                    <div className="info-wrap">
                                        <a href="#" className="title">Product name</a>
                                        <div className="price mt-1">$179.00</div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xl-2 col-lg-3 col-md-6">
                                <div className="card card-product-grid">
                                    <a href="#" className="img-wrap"> <img src="assets/imgs/items/7.jpg" alt="Product" /> </a>
                                    <div className="info-wrap">
                                        <a href="#" className="title">Product name</a>
                                        <div className="price mt-1">$179.00</div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xl-2 col-lg-3 col-md-6">
                                <div className="card card-product-grid">
                                    <a href="#" className="img-wrap"> <img src="assets/imgs/items/8.jpg" alt="Product" /> </a>
                                    <div className="info-wrap">
                                        <a href="#" className="title">Apple Airpods CB-133</a>
                                        <div className="price mt-1">$179.00</div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xl-2 col-lg-3 col-md-6">
                                <div className="card card-product-grid">
                                    <a href="#" className="img-wrap"> <img src="assets/imgs/items/9.jpg" alt="Product" /> </a>
                                    <div className="info-wrap">
                                        <a href="#" className="title">Product name</a>
                                        <div className="price mt-1">$179.00</div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xl-2 col-lg-3 col-md-6">
                                <div className="card card-product-grid">
                                    <a href="#" className="img-wrap"> <img src="assets/imgs/items/10.jpg" alt="Product" /> </a>
                                    <div className="info-wrap">
                                        <a href="#" className="title">Product name</a>
                                        <div className="price mt-1">$179.00</div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xl-2 col-lg-3 col-md-6">
                                <div className="card card-product-grid">
                                    <a href="#" className="img-wrap"> <img src="assets/imgs/items/11.jpg" alt="Product" /> </a>
                                    <div className="info-wrap">
                                        <a href="#" className="title">All Natural Italian-Style</a>
                                        <div className="price mt-1">$179.00</div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xl-2 col-lg-3 col-md-6">
                                <div className="card card-product-grid">
                                    <a href="#" className="img-wrap"> <img src="assets/imgs/items/12.jpg" alt="Product" /> </a>
                                    <div className="info-wrap">
                                        <a href="#" className="title">Boomchick apop Sweet & Salty</a>
                                        <div className="price mt-1">$179.00</div>
                                        
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

export default SellerProfile