import DashboardLayout from "../components/layout/DashboardLayout";
import newMember1 from '../assets/imgs/people/avatar-1.png'
import newMember3 from '../assets/imgs/people/avatar-3.png'
import newMember4 from '../assets/imgs/people/avatar-4.png'
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { toast } from "react-toastify";
import { useState } from "react";
import { useGetRrecordQuery } from "../app/services/order";
import { useSelector } from "react-redux";
import { auth } from "../firebase/Firebase.config";
import { Link } from "react-router-dom";
import DateCalendar from "../components/elements/DateCalendar";

const Home = () => {
    const [selectedDates, setSelectedDates] = useState([]);
    const date = `fromDate=${selectedDates[0]}&toDate=${selectedDates[1]}`;
    const { data: record, isLoading } = useGetRrecordQuery(date)
    const { userInfo } = useSelector(state => state.auth);
    const { role } = userInfo.users;


    return (
        <DashboardLayout>
            <div className=" content-header">
                <div>
                    <h2 className="content-title card-title">Dashboards</h2>
                    <p>Whole data about your business here</p>
                </div>
                <div>
                    <DateCalendar
                        selectedDates={selectedDates}
                        setSelectedDates={setSelectedDates}
                        className="btn btn-primary" />
                    {/* <a href="#" className="btn btn-primary"><i className="text-muted material-icons md-post_add"></i>Create report</a> */}
                </div>
            </div>
            <div className="row">
                {
                    role == 'admin' && <div className="col-lg-3">
                        <div className="card card-body mb-4">
                            <article className="icontext">
                                <span className="icon icon-sm rounded-circle bg-primary-light"><i className="text-primary material-icons md-monetization_on"></i></span>
                                <div className="text">
                                    <h6 className="mb-1 card-title">Cost of Goods</h6>
                                    <span>${record?.products?.[0]?.cost.toFixed(2)}</span>
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
                                <span>${record?.sale[0]?.total ? record?.sale[0]?.total.toFixed(2) : 0}</span>
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
                                    <h6 className="mb-1 card-title">In Stock</h6>
                                    <span>{record?.products[0]?.quantity ? record?.products[0]?.quantity : 0}</span>
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
                                <h6 className="mb-1 card-title">Total Sold Quantity</h6>
                                <span>{record?.sale[0]?.quantity ? record?.sale[0]?.quantity : 0}</span>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card card-body mb-4">
                        <article className="icontext">
                            <span className="icon icon-sm rounded-circle bg-info-light"><i className="text-info material-icons md-shopping_basket"></i></span>
                            <div className="text">
                                <h6 className="mb-1 card-title">Due Invoice</h6>
                                <span>${record?.payment?.totalDue ? record?.payment?.totalDue.toFixed(2) : 0}</span>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card card-body mb-4">
                        <article className="icontext">
                            <span className="icon icon-sm rounded-circle bg-info-light"><i className="text-info material-icons md-shopping_basket"></i></span>
                            <div className="text">
                                <h6 className="mb-1 card-title">Paid Inoivce</h6>
                                <span>${record?.payment?.totalInvoic ? record?.payment?.totalInvoic.toFixed(2) : 0}</span>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card card-body mb-4">
                        <article className="icontext">
                            <span className="icon icon-sm rounded-circle bg-info-light"><i className="text-info material-icons md-shopping_basket"></i></span>
                            <div className="text">
                                <h6 className="mb-1 card-title">Refund</h6>
                                <span>{record?.refund[0]?.quantity ? record?.refund[0]?.quantity : 0}</span>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card card-body mb-4">
                        <article className="icontext">
                            <span className="icon icon-sm rounded-circle bg-info-light"><i className="text-info material-icons md-shopping_basket"></i></span>
                            <div className="text">
                                <h6 className="mb-1 card-title">Shrinkage</h6>
                                <span>{record?.shrinkage[0]?.quantity ? record?.shrinkage[0]?.quantity : 0}</span>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

        </DashboardLayout >
    );
}

export default Home;