import DashboardLayout from "../components/layout/DashboardLayout";
import newMember1 from '../assets/imgs/people/avatar-1.png'
import newMember3 from '../assets/imgs/people/avatar-3.png'
import newMember4 from '../assets/imgs/people/avatar-4.png'
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import Pagination from "../components/elements/Pagination";
import { toast } from "react-toastify";
import { useState } from "react";
import { useGetRrecordQuery } from "../app/services/order";
import { useSelector } from "react-redux";
import { auth } from "../firebase/Firebase.config";

const Home = () => {
    const { data: record, isLoading } = useGetRrecordQuery()
    const { userInfo } = useSelector(state => state.auth);
    const { role } = userInfo.users;

    const [selected, setSelected] = useState('');


    const data = [
        {
            "name": "Jan",
            "uv": 4000,
            "pv": 2400,
            "amt": 0
        },
        {
            "name": "Feb",
            "uv": 3000,
            "pv": 1398,
            "amt": 5
        },
        {
            "name": "Mar",
            "uv": 2000,
            "pv": 9800,
            "amt": 10
        },
        {
            "name": "Apr",
            "uv": 2780,
            "pv": 3908,
            "amt": 15
        },
        {
            "name": "May",
            "uv": 1890,
            "pv": 4800,
            "amt": 20
        },
        {
            "name": "Jun",
            "uv": 2390,
            "pv": 3800,
            "amt": 25
        },
        {
            "name": "Jul",
            "uv": 3490,
            "pv": 4300,
            "amt": 30
        },
        {
            "name": "Aug",
            "uv": 3490,
            "pv": 4300,
            "amt": 35
        },
        {
            "name": "Sep",
            "uv": 3490,
            "pv": 4300,
            "amt": 40
        },
        {
            "name": "Oct",
            "uv": 3490,
            "pv": 4300,
            "amt": 40
        },
        {
            "name": "Dec",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        },
    ]

    return (
        <DashboardLayout>
            <div className=" content-header">
                <div>
                    <h2 className="content-title card-title" onClick={() => toast('hello')}>Dashboards</h2>
                    <p>Whole data about your business here</p>
                </div>
                <div>
                    <a href="#" className="btn btn-primary"><i className="text-muted material-icons md-post_add"></i>Create report</a>
                </div>
            </div>
            <div className="row">
                {
                    role == 'admin' && <div className="col-lg-3">
                        <div className="card card-body mb-4">
                            <article className="icontext">
                                <span className="icon icon-sm rounded-circle bg-primary-light"><i className="text-primary material-icons md-monetization_on"></i></span>
                                <div className="text">
                                    <h6 className="mb-1 card-title">Total Cost</h6>
                                    <span>${record?.products?.[0]?.cost}</span>
                                </div>
                            </article>
                        </div>
                    </div>
                }

                <div className="col-lg-3">
                    <div className="card card-body mb-4">
                        <article className="icontext">
                            <span className="icon icon-sm rounded-circle bg-success-light"><i className="text-success material-icons md-local_shipping"></i></span>
                            <div className="text">
                                <h6 className="mb-1 card-title">Total Sales</h6>
                                <span>${record?.sales?.[0]?.total.toFixed(2)}</span>
                            </div>
                        </article>
                    </div>
                </div>
                {
                    role == 'admin' && <div className="col-lg-3">
                        <div className="card card-body mb-4">
                            <article className="icontext">
                                <span className="icon icon-sm rounded-circle bg-warning-light"><i className="text-warning material-icons md-qr_code"></i></span>
                                <div className="text">
                                    <h6 className="mb-1 card-title">Products Quantity</h6>
                                    <span>{record?.products?.[0]?.quantity}</span>
                                </div>
                            </article>
                        </div>
                    </div>
                }

                <div className="col-lg-3">
                    <div className="card card-body mb-4">
                        <article className="icontext">
                            <span className="icon icon-sm rounded-circle bg-info-light"><i className="text-info material-icons md-shopping_basket"></i></span>
                            <div className="text">
                                <h6 className="mb-1 card-title">Sales Quantity</h6>
                                <span>{record?.sales?.[0]?.quantity}</span>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-8 col-lg-12">
                    <div className="card mb-4">
                        <article className="card-body">
                            <h5 className="card-title">Sale statistics</h5>
                            <AreaChart width={730} height={250} data={data}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="rgba(44, 120, 220, 0.2)" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="rgba(44, 120, 220)" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                            </AreaChart>
                        </article>
                    </div>
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="card mb-4">
                                <article className="card-body">
                                    <h5 className="card-title">New Members</h5>
                                    <div className="new-member-list">
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <div className="d-flex align-items-center">
                                                <img src={newMember4} alt="" className="avatar" />
                                                <div>
                                                    <h6>Patric Adams</h6>
                                                    <p className="text-muted font-xs">Sanfrancisco</p>
                                                </div>
                                            </div>
                                            <a href="#" className="btn btn-xs"><i className="material-icons md-add"></i> Add</a>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <div className="d-flex align-items-center">
                                                <img src={newMember3} alt="" className="avatar" />
                                                <div>
                                                    <h6>Dilan Specter</h6>
                                                    <p className="text-muted font-xs">Sanfrancisco</p>
                                                </div>
                                            </div>
                                            <a href="#" className="btn btn-xs"><i className="material-icons md-add"></i> Add</a>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <div className="d-flex align-items-center">
                                                <img src={newMember1} alt="" className="avatar" />
                                                <div>
                                                    <h6>Tomas Baker</h6>
                                                    <p className="text-muted font-xs">Sanfrancisco</p>
                                                </div>
                                            </div>
                                            <a href="#" className="btn btn-xs"><i className="material-icons md-add"></i> Add</a>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="card mb-4">
                                <article className="card-body">
                                    <h5 className="card-title">Recent activities</h5>
                                    <ul className="verti-timeline list-unstyled font-sm">
                                        <li className="event-list">
                                            <div className="event-timeline-dot">
                                                <i className="material-icons md-play_circle_outline font-xxl"></i>
                                            </div>
                                            <div className="media">
                                                <div className="me-3">
                                                    <h6><span>Today</span> <i className="material-icons md-trending_flat text-brand ml-15 d-inline-block"></i></h6>
                                                </div>
                                                <div className="media-body">
                                                    <div>Lorem ipsum dolor sit amet consectetur</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="event-list active">
                                            <div className="event-timeline-dot">
                                                <i className="material-icons md-play_circle_outline font-xxl animation-fade-right"></i>
                                            </div>
                                            <div className="media">
                                                <div className="me-3">
                                                    <h6><span>17 May</span> <i className="material-icons md-trending_flat text-brand ml-15 d-inline-block"></i></h6>
                                                </div>
                                                <div className="media-body">
                                                    <div>Debitis nesciunt voluptatum dicta reprehenderit</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="event-list">
                                            <div className="event-timeline-dot">
                                                <i className="material-icons md-play_circle_outline font-xxl"></i>
                                            </div>
                                            <div className="media">
                                                <div className="me-3">
                                                    <h6><span>13 May</span> <i className="material-icons md-trending_flat text-brand ml-15 d-inline-block"></i></h6>
                                                </div>
                                                <div className="media-body">
                                                    <div>Accusamus voluptatibus voluptas.</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="event-list">
                                            <div className="event-timeline-dot">
                                                <i className="material-icons md-play_circle_outline font-xxl"></i>
                                            </div>
                                            <div className="media">
                                                <div className="me-3">
                                                    <h6><span>05 April</span> <i className="material-icons md-trending_flat text-brand ml-15 d-inline-block"></i></h6>
                                                </div>
                                                <div className="media-body">
                                                    <div>At vero eos et accusamus et iusto odio dignissi</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="event-list">
                                            <div className="event-timeline-dot">
                                                <i className="material-icons md-play_circle_outline font-xxl"></i>
                                            </div>
                                            <div className="media">
                                                <div className="me-3">
                                                    <h6><span>26 Mar</span> <i className="material-icons md-trending_flat text-brand ml-15 d-inline-block"></i></h6>
                                                </div>
                                                <div className="media-body">
                                                    <div>Responded to need “Volunteer Activities</div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-12">
                    <div className="card mb-4">
                        <article className="card-body">
                            <h5 className="card-title">Revenue Base on Area</h5>
                            <canvas id="myChart2" height="217"></canvas>
                        </article>
                    </div>
                    <div className="card mb-4">
                        <article className="card-body">
                            <h5 className="card-title">Marketing Chanel</h5>
                            <span className="text-muted font-xs">Facebook</span>
                            <div className="progress mb-3">
                                <div className="progress-bar" role="progressbar" style={{ width: "15%" }}>15%</div>
                            </div>
                            <span className="text-muted font-xs">Instagram</span>
                            <div className="progress mb-3">
                                <div className="progress-bar" role="progressbar" style={{ width: "65%" }}>65%</div>
                            </div>
                            <span className="text-muted font-xs">Google</span>
                            <div className="progress mb-3">
                                <div className="progress-bar" role="progressbar" style={{ width: "51%" }}>51%</div>
                            </div>
                            <span className="text-muted font-xs">Twitter</span>
                            <div className="progress mb-3">
                                <div className="progress-bar" role="progressbar" style={{ width: "80%" }}>80%</div>
                            </div>
                            <span className="text-muted font-xs">Other</span>
                            <div className="progress mb-3">
                                <div className="progress-bar" role="progressbar" style={{ width: "80%" }}>80%</div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            <div className="card mb-4">
                <header className="card-header">
                    <h4 className="card-title">Latest orders</h4>
                    <div className="row align-items-center">
                        <div className="col-md-3 col-12 me-auto mb-md-0 mb-3">
                            {/* <div className="custom_select">
                                <select className="form-select select-nice">
                                    <option selected>All Categories</option>
                                    <option>Women's Clothing</option>
                                    <option>Men's Clothing</option>
                                    <option>Cellphones</option>
                                    <option>Computer & Office</option>
                                    <option>Consumer Electronics</option>
                                    <option>Jewelry & Accessories</option>
                                    <option>Home & Garden</option>
                                    <option>Luggage & Bags</option>
                                    <option>Shoes</option>
                                    <option>Mother & Kids</option>
                                </select>
                            </div> */}
                        </div>
                        <div className="col-md-2 col-6">
                            <input type="date" defaultValue="02.05.2021" className="form-control" />
                        </div>
                        <div className="col-md-2 col-6">
                            <div className="custom_select">
                                <select className="form-select select-nice">
                                    <option defaultValue={selected}>Status</option>
                                    <option>All</option>
                                    <option>Paid</option>
                                    <option>Chargeback</option>
                                    <option>Refund</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="card-body">
                    <div className="table-responsive">
                        <div className="table-responsive">
                            <table className="table align-middle table-nowrap mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col" className="text-center">
                                            <div className="form-check align-middle">
                                                <input className="form-check-input" type="checkbox" id="transactionCheck01" />
                                                <label className="form-check-label" htmlFor="transactionCheck01"></label>
                                            </div>
                                        </th>
                                        <th className="align-middle" scope="col">Order ID</th>
                                        <th className="align-middle" scope="col">Billing Name</th>
                                        <th className="align-middle" scope="col">Date</th>
                                        <th className="align-middle" scope="col">Total</th>
                                        <th className="align-middle" scope="col">Payment Status</th>
                                        <th className="align-middle" scope="col">Payment Method</th>
                                        <th className="align-middle" scope="col">View Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-center">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="transactionCheck02" />
                                                <label className="form-check-label" htmlFor="transactionCheck02"></label>
                                            </div>
                                        </td>
                                        <td><a href="#" className="fw-bold">#SK2540</a></td>
                                        <td>Neal Matthews</td>
                                        <td>07 Oct, 2021</td>
                                        <td>$400</td>
                                        <td>
                                            <span className="badge badge-pill badge-soft-success">Paid</span>
                                        </td>
                                        <td><i className="material-icons md-payment font-xxl text-muted mr-5"></i> Mastercard</td>
                                        <td>
                                            <a href="#" className="btn btn-xs"> View details</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="transactionCheck03" />
                                                <label className="form-check-label" htmlFor="transactionCheck03"></label>
                                            </div>
                                        </td>
                                        <td><a href="#" className="fw-bold">#SK2541</a></td>
                                        <td>Jamal Burnett</td>
                                        <td>07 Oct, 2021</td>
                                        <td>$380</td>
                                        <td>
                                            <span className="badge badge-pill badge-soft-danger">Chargeback</span>
                                        </td>
                                        <td><i className="material-icons md-payment font-xxl text-muted mr-5"></i> Visa</td>
                                        <td>
                                            <a href="#" className="btn btn-xs"> View details</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="transactionCheck04" />
                                                <label className="form-check-label" htmlFor="transactionCheck04"></label>
                                            </div>
                                        </td>
                                        <td><a href="#" className="fw-bold">#SK2542</a></td>
                                        <td>Juan Mitchell</td>
                                        <td>06 Oct, 2021</td>
                                        <td>$384</td>
                                        <td>
                                            <span className="badge badge-pill badge-soft-success">Paid</span>
                                        </td>
                                        <td><i className="material-icons md-payment font-xxl text-muted mr-5"></i> Paypal</td>
                                        <td>
                                            <a href="#" className="btn btn-xs"> View details</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="transactionCheck05" />
                                                <label className="form-check-label" htmlFor="transactionCheck05"></label>
                                            </div>
                                        </td>
                                        <td><a href="#" className="fw-bold">#SK2543</a></td>
                                        <td>Barry Dick</td>
                                        <td>05 Oct, 2021</td>
                                        <td>$412</td>
                                        <td>
                                            <span className="badge badge-pill badge-soft-success">Paid</span>
                                        </td>
                                        <td><i className="material-icons md-payment font-xxl text-muted mr-5"></i> Mastercard</td>
                                        <td>
                                            <a href="#" className="btn btn-xs"> View details</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="transactionCheck06" />
                                                <label className="form-check-label" htmlFor="transactionCheck06"></label>
                                            </div>
                                        </td>
                                        <td><a href="#" className="fw-bold">#SK2544</a></td>
                                        <td>Ronald Taylor</td>
                                        <td>04 Oct, 2021</td>
                                        <td>$404</td>
                                        <td>
                                            <span className="badge badge-pill badge-soft-warning">Refund</span>
                                        </td>
                                        <td><i className="material-icons md-payment font-xxl text-muted mr-5"></i> Visa</td>
                                        <td>
                                            <a href="#" className="btn btn-xs"> View details</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="transactionCheck07" />
                                                <label className="form-check-label" htmlFor="transactionCheck07"></label>
                                            </div>
                                        </td>
                                        <td><a href="#" className="fw-bold">#SK2545</a></td>
                                        <td>Jacob Hunter</td>
                                        <td>04 Oct, 2021</td>
                                        <td>$392</td>
                                        <td>
                                            <span className="badge badge-pill badge-soft-success">Paid</span>
                                        </td>
                                        <td><i className="material-icons md-payment font-xxl text-muted mr-5"></i> Paypal</td>
                                        <td>
                                            <a href="#" className="btn btn-xs"> View details</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Pagination />




        </DashboardLayout >
    );
}

export default Home;