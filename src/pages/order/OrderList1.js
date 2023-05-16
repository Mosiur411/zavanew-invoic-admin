import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import Pagination from '../../components/elements/Pagination'

function OrderList1() {
  return (
    <DashboardLayout>
      <section className="content-main">
        <div className="content-header">
          <div>
            <h2 className="content-title card-title">Order List</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <input type="text" placeholder="Search order ID" className="form-control bg-white" />
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
                  <option>Status</option>
                  <option>Active</option>
                  <option>Disabled</option>
                  <option>Show all</option>
                </select>
              </div>
              <div className="col-lg-2 col-6 col-md-3">
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
                    <th>#ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Total</th>
                    <th scope="col">Status</th>
                    <th scope="col">Date</th>
                    <th scope="col" className="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0901</td>
                    <td><b>Marvin McKinney</b></td>
                    <td>marvin@example.com</td>
                    <td>$9.00</td>
                    <td><span className="badge rounded-pill alert-warning">Pending</span></td>
                    <td>03.12.2020</td>
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
                    <td>2323</td>
                    <td><b>Leslie Alexander</b></td>
                    <td>leslie@example.com</td>
                    <td>$46.61</td>
                    <td><span className="badge rounded-pill alert-warning">Pending</span></td>
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
                    <td>1233</td>
                    <td><b>Esther Howard</b></td>
                    <td>esther@example.com</td>
                    <td>$12.00</td>
                    <td><span className="badge rounded-pill alert-danger">Canceled</span></td>
                    <td>03.07.2020</td>
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
                    <td>1233</td>
                    <td><b>Esther Howard</b></td>
                    <td>esther@example.com</td>
                    <td>$12.00</td>
                    <td><span className="badge rounded-pill alert-danger">Canceled</span></td>
                    <td>03.07.2020</td>
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
                    <td>2323</td>
                    <td><b>Jenny Wilson</b></td>
                    <td>jenny@example.com</td>
                    <td>$589.99</td>
                    <td><span className="badge rounded-pill alert-success">Received</span></td>
                    <td>22.05.2020</td>
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
                    <td>2112</td>
                    <td><b>Marvin McKinney</b></td>
                    <td>marvin@example.com</td>
                    <td>$16.58</td>
                    <td><span className="badge rounded-pill alert-success">Received</span></td>
                    <td>23.04.2020</td>
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
                    <td>7897</td>
                    <td><b>Albert Flores</b></td>
                    <td>albert@example.com</td>
                    <td>$10.00</td>
                    <td><span className="badge rounded-pill alert-success">Received</span></td>
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
                    <td>2323</td>
                    <td><b>Wade Warren</b></td>
                    <td>wade@example.com</td>
                    <td>$105.55</td>
                    <td><span className="badge rounded-pill alert-success">Received</span></td>
                    <td>23.09.2019</td>
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
                    <td>2324</td>
                    <td><b>Jane Cooper</b></td>
                    <td>jane@example.com</td>
                    <td>$710.68</td>
                    <td><span className="badge rounded-pill alert-success">Received</span></td>
                    <td>28.04.2020</td>
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
                    <td>2325</td>
                    <td><b>Savannah Nguyen</b></td>
                    <td>savannah@example.com</td>
                    <td>$710.68</td>
                    <td><span className="badge rounded-pill alert-success">Received</span></td>
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
                    <td>2326</td>
                    <td><b>Guy Hawkins</b></td>
                    <td>guy@example.com</td>
                    <td>$767.50</td>
                    <td><span className="badge rounded-pill alert-success">Received</span></td>
                    <td>28.04.2020</td>
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
                    <td>2327</td>
                    <td><b>Darrell Steward</b></td>
                    <td>darrel@example.com</td>
                    <td>$406.27</td>
                    <td><span className="badge rounded-pill alert-success">Received</span></td>
                    <td>14.07.2020</td>
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
                    <td>2328</td>
                    <td><b>Jane Cooper</b></td>
                    <td>jane@example.com</td>
                    <td>$601.13</td>
                    <td><span className="badge rounded-pill alert-success">Received</span></td>
                    <td>18.03.2020</td>
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
                    <td>2329</td>
                    <td><b>Darlene Robertson</b></td>
                    <td>deriene@example.com</td>
                    <td>$948.55</td>
                    <td><span className="badge rounded-pill alert-success">Received</span></td>
                    <td>03.07.2020</td>
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

export default OrderList1