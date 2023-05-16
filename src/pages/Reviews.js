import React from 'react'
import DashboardLayout from '../components/layout/DashboardLayout'
import Pagination from '../components/elements/Pagination'

function Reviews() {
  return (
    <DashboardLayout>
         <section className="content-main">
                <div className="content-header">
                    <div>
                        <h2 className="content-title card-title">Reviews</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div>
                        <input type="text" placeholder="Search by name" className="form-control bg-white" />
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
                                        <th>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" />
                                            </div>
                                        </th>
                                        <th>#ID</th>
                                        <th>Product</th>
                                        <th>Name</th>
                                        <th>Rating</th>
                                        <th>Date</th>
                                        <th className="text-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" />
                                            </div>
                                        </td>
                                        <td>23</td>
                                        <td><b>Organic Quinoa, Brown, & Red Rice</b></td>
                                        <td>Devon Lane</td>
                                        <td>
                                            <ul className="rating-stars">
                                                <li style={{width: "60%"}} className="stars-active">
                                                    <img src="assets/imgs/icons/stars-active.svg" alt="stars" />
                                                </li>
                                                <li>
                                                    <img src="assets/imgs/icons/starts-disable.svg" alt="stars" />
                                                </li>
                                            </ul>
                                        </td>
                                        <td>10.03.2020</td>
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
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" />
                                            </div>
                                        </td>
                                        <td>24</td>
                                        <td><b>All Natural Italian-Style</b></td>
                                        <td>Guy Hawkins</td>
                                        <td>
                                            <ul className="rating-stars">
                                                <li style={{width: "80%"}} className="stars-active">
                                                    <img src="assets/imgs/icons/stars-active.svg" alt="stars" />
                                                </li>
                                                <li>
                                                    <img src="assets/imgs/icons/starts-disable.svg" alt="stars" />
                                                </li>
                                            </ul>
                                        </td>
                                        <td>04.12.2019</td>
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
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" />
                                            </div>
                                        </td>
                                        <td>25</td>
                                        <td><b>Angie’s Boomchickapop Sweet</b></td>
                                        <td>Steven John</td>
                                        <td>
                                            <ul className="rating-stars">
                                                <li style={{width: "90%"}} className="stars-active">
                                                    <img src="assets/imgs/icons/stars-active.svg" alt="stars" />
                                                </li>
                                                <li>
                                                    <img src="assets/imgs/icons/starts-disable.svg" alt="stars" />
                                                </li>
                                            </ul>
                                        </td>
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
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" />
                                            </div>
                                        </td>
                                        <td>26</td>
                                        <td><b>Foster Farms Takeout Crispy Classic</b></td>
                                        <td>Kristin Watson</td>
                                        <td>
                                            <ul className="rating-stars">
                                                <li style={{width: "90%"}} className="stars-active">
                                                    <img src="assets/imgs/icons/stars-active.svg" alt="stars" />
                                                </li>
                                                <li>
                                                    <img src="assets/imgs/icons/starts-disable.svg" alt="stars" />
                                                </li>
                                            </ul>
                                        </td>
                                        <td>01.06.2020</td>
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
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" />
                                            </div>
                                        </td>
                                        <td>27</td>
                                        <td><b>Blue Diamond Almonds Lightly Salted</b></td>
                                        <td>Jane Cooper</td>
                                        <td>
                                            <ul className="rating-stars">
                                                <li style={{width: "100%"}} className="stars-active">
                                                    <img src="assets/imgs/icons/stars-active.svg" alt="stars" />
                                                </li>
                                                <li>
                                                    <img src="assets/imgs/icons/starts-disable.svg" alt="stars" />
                                                </li>
                                            </ul>
                                        </td>
                                        <td>13.03.2020</td>
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
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" />
                                            </div>
                                        </td>
                                        <td>28</td>
                                        <td><b>Chobani Complete Vanilla Greek Yogurt</b></td>
                                        <td>Courtney Henry</td>
                                        <td>
                                            <ul className="rating-stars">
                                                <li style={{width: "100%"}} className="stars-active">
                                                    <img src="assets/imgs/icons/stars-active.svg" alt="stars" />
                                                </li>
                                                <li>
                                                    <img src="assets/imgs/icons/starts-disable.svg" alt="stars" />
                                                </li>
                                            </ul>
                                        </td>
                                        <td>21.02.2020</td>
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
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" />
                                            </div>
                                        </td>
                                        <td>29</td>
                                        <td><b>Canada Dry Ginger Ale – 2 L Bottle</b></td>
                                        <td>Ralph Edwards</td>
                                        <td>
                                            <ul className="rating-stars">
                                                <li style={{width: "90%"}} className="stars-active">
                                                    <img src="assets/imgs/icons/stars-active.svg" alt="stars" />
                                                </li>
                                                <li>
                                                    <img src="assets/imgs/icons/starts-disable.svg" alt="stars" />
                                                </li>
                                            </ul>
                                        </td>
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
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" />
                                            </div>
                                        </td>
                                        <td>30</td>
                                        <td><b>Encore Seafoods Stuffed Alaskan</b></td>
                                        <td>Courtney Henry</td>
                                        <td>
                                            <ul className="rating-stars">
                                                <li style={{width: "70%"}} className="stars-active">
                                                    <img src="assets/imgs/icons/stars-active.svg" alt="stars" />
                                                </li>
                                                <li>
                                                    <img src="assets/imgs/icons/starts-disable.svg" alt="stars" />
                                                </li>
                                            </ul>
                                        </td>
                                        <td>20.02.2020</td>
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
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" />
                                            </div>
                                        </td>
                                        <td>31</td>
                                        <td><b>Gorton Beer Battered Fish Fillets</b></td>
                                        <td>Theresa Webb</td>
                                        <td>
                                            <ul className="rating-stars">
                                                <li style={{width: "20%"}} className="stars-active">
                                                    <img src="assets/imgs/icons/stars-active.svg" alt="stars" />
                                                </li>
                                                <li>
                                                    <img src="assets/imgs/icons/starts-disable.svg" alt="stars" />
                                                </li>
                                            </ul>
                                        </td>
                                        <td>10.03.2020</td>
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
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" />
                                            </div>
                                        </td>
                                        <td>32</td>
                                        <td><b>Haagen-Dazs Caramel Cone</b></td>
                                        <td>Darrell Steward</td>
                                        <td>
                                            <ul className="rating-stars">
                                                <li style={{width: "80%"}} className="stars-active">
                                                    <img src="assets/imgs/icons/stars-active.svg" alt="stars" />
                                                </li>
                                                <li>
                                                    <img src="assets/imgs/icons/starts-disable.svg" alt="stars" />
                                                </li>
                                            </ul>
                                        </td>
                                        <td>10.04.2020</td>
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
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" />
                                            </div>
                                        </td>
                                        <td>33</td>
                                        <td><b>Nestle Original Coffee-Mate Coffee Creamer </b></td>
                                        <td>Leslie Alexander</td>
                                        <td>
                                            <ul className="rating-stars">
                                                <li style={{width: "50%"}} className="stars-active">
                                                    <img src="assets/imgs/icons/stars-active.svg" alt="stars" />
                                                </li>
                                                <li>
                                                    <img src="assets/imgs/icons/starts-disable.svg" alt="stars" />
                                                </li>
                                            </ul>
                                        </td>
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
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" />
                                            </div>
                                        </td>
                                        <td>34</td>
                                        <td><b>Seeds of Change Organic Quinoa</b></td>
                                        <td>Esther Howard</td>
                                        <td>
                                            <ul className="rating-stars">
                                                <li style={{width: "100%"}} className="stars-active">
                                                    <img src="assets/imgs/icons/stars-active.svg" alt="stars" />
                                                </li>
                                                <li>
                                                    <img src="assets/imgs/icons/starts-disable.svg" alt="stars" />
                                                </li>
                                            </ul>
                                        </td>
                                        <td>07.04.2020</td>
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
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" />
                                            </div>
                                        </td>
                                        <td>35</td>
                                        <td><b>Organic Frozen Triple Berry Blend</b></td>
                                        <td>Steven John</td>
                                        <td>
                                            <ul className="rating-stars">
                                                <li style={{width: "100%"}} className="stars-active">
                                                    <img src="assets/imgs/icons/stars-active.svg" alt="stars" />
                                                </li>
                                                <li>
                                                    <img src="assets/imgs/icons/starts-disable.svg" alt="stars" />
                                                </li>
                                            </ul>
                                        </td>
                                        <td>10.10.2019</td>
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
                <Pagination/>
               
            </section>
    </DashboardLayout>
  )
}

export default Reviews