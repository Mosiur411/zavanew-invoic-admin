import React, { useEffect, useMemo } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import Pagination from '../../components/elements/Pagination'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useGetSalesQuery } from '../../app/services/sales'
import GetSpinner from '../../helpers/shared/GetSpinner'
import SingleSales from '../../components/elements/sales/SingleSales'

function Sales() {
    const [Loading, setLoading] = useState(false)
    const [search, setSearchValue] = useState('')
    const { pathname } = useLocation()
    const parts = pathname.split('/');
    const lastWord = parts[parts.length - 1];
    const [{ pageIndex, pageSize }, setPagination] = useState({ pageIndex: 0, pageSize: 10, });
    const url = `distractions=${lastWord == 'all' ? '' : lastWord}&page=${pageIndex}&limit=${pageSize}&search=${search}`;
    const { data, isLoading } = useGetSalesQuery(url)
    const salesData = useMemo(() => (data ? data?.sales : []), [
        data,
        search
    ]);
    useEffect(() => {
        if (isLoading) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [isLoading])


    return (
        <DashboardLayout>
            <section className="content-main">
                <div className="content-header">
                    <div>
                        <h2 className="content-title card-title">{lastWord} Sales</h2>
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
                                <input type="text" onChange={(e) => setSearchValue(e.target.value)} placeholder="Search..." className="form-control" />
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
                                        <th>#Id</th>
                                        <th>Date</th>
                                        <th scope="col">Company Name</th>
                                        <th scope="col">QTY</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">Payment</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Distractions</th>
                                        <th scope="col" className="text-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Loading && <GetSpinner />}
                                    {salesData.map((data) => <SingleSales data={data} key={data?._id} />)}
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

export default Sales