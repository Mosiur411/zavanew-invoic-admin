import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { useState } from 'react';
import { useGetAllInvoceQuery } from '../../app/services/order';
import Pagination from '../../components/elements/Pagination';
import SingleOrder from '../../components/elements/product/SingleOrder';

function OrderDue() {
    const [Loading, setLoading] = useState(false)
    const [search, setSearchValue] = useState('')
    const [{ pageIndex, pageSize }, setPagination] = useState({ pageIndex: 0, pageSize: 10, });
    const pathname = `page=${pageIndex}&limit=${pageSize}&search=${search}&invoice=due`;

    const { data, isLoading } = useGetAllInvoceQuery(pathname)

    // useEffect(() => {
    //     if (isLoading) {
    //         setLoading(true)
    //     } else {
    //         setLoading(false)
    //     }
    // }, [isLoading])
    return (
        <DashboardLayout>
            <section className="content-main">
                <div className="content-header">
                    <div>
                        <h2 className="content-title card-title">Ordered Invoice Due</h2>
                        <p></p>
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
                                        <th scope="col">Company Name</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">Payment</th>
                                        <th scope="col">quantity</th>
                                        <th scope="col" className="text-end">Action</th>
                                    </tr>
                                </thead>
                                 <tbody>
                                   {/*  {Loading && <GetSpinner/>} */}
                                    {data?.invoice.map((data) => <SingleOrder data={data} key={data?._id}/>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                  <Pagination totalPages={data?.totalPages} setPagination={setPagination} />
            </section>
        </DashboardLayout>
    )
}

export default OrderDue