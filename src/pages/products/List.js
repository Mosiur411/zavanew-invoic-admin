import React, { useMemo } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import Pagination from '../../components/elements/Pagination'
import SingleProductList from '../../components/elements/product/SingleProductList'
import { useGetproductQuery } from '../../app/services/product'
import { Link } from 'react-router-dom'
import GetSpinner from '../../helpers/shared/GetSpinner'
import { useState } from 'react'
import { useEffect } from 'react'
import ProductModal from '../../components/elements/modal/ProductModal'
import { useSelector } from 'react-redux'
import { auth } from '../../firebase/Firebase.config'

function List() {

    // const { userInfo } = useSelector(()=>auth);
    const { userInfo } = useSelector(state => state.auth);

    /* open modeal */
    const [open, setOpen] = useState({
        type: false,
        data: null
    })
    /* paganitonm */
    const [search, setSearchValue] = useState('')
    const [{ pageIndex, pageSize }, setPagination] = useState({ pageIndex: 1, pageSize: 10, });
    const pathname = `page=${pageIndex}&limit=${pageSize}&search=${search}`;
    const [Loading, setLoading] = useState(false)
    const { data, isLoading } = useGetproductQuery(pathname)
    useEffect(() => {
        if (isLoading) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [isLoading])
    const ProductData = useMemo(() => (data ? data?.product : []), [
        data,
        search
    ]);



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
                        <Link to="/addproduct/1" className="btn btn-primary btn-sm rounded">Create new</Link>

                    </div>
                </div>
                <div className="card mb-4">
                    <header className="card-header">
                        <div className="row align-items-center">
                            <div className="col-md-3 col-12 me-auto mb-md-0 mb-3">
                                <input onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Search..." className="form-control"

                                />
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
                    <div className="col-md-12 px-4 ">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr className=''>
                                        <th>Product Name</th>
                                        <th>UPC</th>
                                        {
                                            userInfo.users?.role == 'admin' && <th>Cost</th>
                                        }
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Order</th>
                                        <th className="text-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Loading && <GetSpinner />}
                                    {ProductData.map(data => <SingleProductList open={open} setOpen={setOpen} data={data} key={data.key}
                                        userRole={userInfo.users?.role}
                                    />
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Pagination totalPages={data?.totalPages} setPagination={setPagination} pageIndex={pageIndex} pageSize={pageSize} />
            </section>

            <ProductModal
                modal={open}
                setOpen={setOpen}


            />

        </DashboardLayout>
    )
}

export default List