import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import Pagination from '../../components/elements/Pagination'
import SingleProductList from '../../components/elements/product/SingleProductList'
import { useGetproductQuery } from '../../app/services/product'
import { Link } from 'react-router-dom'
import GetSpinner from '../../helpers/shared/GetSpinner'
import { useState } from 'react'
import { useEffect } from 'react'

function List() {
    const [Loading, setLoading] = useState(false)
    const { data, isLoading } = useGetproductQuery()
    useEffect(() => {
        if (isLoading) {
            setLoading(true)
        }else{
            setLoading(false)
        }
    }, [isLoading])



    return (
        <DashboardLayout>
            <section className="content-main">
                <div className="content-header">
                    <div>
                        <h2 className="content-title card-title">Products List</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div>
                        <a href="#" className="btn btn-light rounded font-md">Export</a>
                        <a href="#" className="btn btn-light rounded font-md">Import</a>
                        <Link to="/addproduct/3" className="btn btn-primary btn-sm rounded">Create new</Link>

                    </div>
                </div>
                <div className="card mb-4">
                    <header className="card-header">
                        <div className="row align-items-center">
                            <div className="col-md-3 col-12 me-auto mb-md-0 mb-3">
                                <select className="form-select">
                                    <option selected>All category</option>
                                    <option>Electronics</option>
                                    <option>Clothes</option>
                                    <option>Automobile</option>
                                </select>
                            </div>
                            <div className="col-md-2 col-6">
                                <input type="date" defaultValue="02.05.2021" className="form-control" />
                            </div>
                            <div className="col-md-2 col-6">
                                <select className="form-select">
                                    <option selected>Status</option>
                                    <option>Active</option>
                                    <option>Disabled</option>
                                    <option>Show all</option>
                                </select>
                            </div>
                        </div>
                    </header>
                    <div className="card-body">
                        {Loading && <GetSpinner />}
                        {
                            data?.product?.map((data) => <SingleProductList data={data} key={data?._id} />)
                        }
                    </div>
                </div>
                <Pagination />
            </section>




        </DashboardLayout>
    )
}

export default List