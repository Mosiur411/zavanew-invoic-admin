import React, { useEffect, useMemo, useState } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import GetSpinner from '../../helpers/shared/GetSpinner';
import Pagination from '../../components/elements/Pagination';
import SingleCoustomer from '../../components/elements/user/SingleCoustomer';
import CoustomerCreate from '../../components/elements/modal/CoustomerCreate';
import CoustomerEdit from '../../components/elements/modal/CoustomerEdit';
import { useGetCoustomerQuery } from '../../app/services/coustomer';
function SettingSample1() {
    /* employ list add  */
    const [search, setSearchValue] = useState('')
    const [{ pageIndex, pageSize }, setPagination] = useState({ pageIndex: 1, pageSize: 10, });
    const pathname = `page=${pageIndex}&limit=${pageSize}&search=${search}`;
    const [Loading, setLoading] = useState(false)
    const { data, isLoading } = useGetCoustomerQuery(pathname)
    useEffect(() => {
        if (isLoading) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [isLoading])
    const EmployeeData = useMemo(() => (data ? data?.coustomer : []), [
        data,
        search
    ]);

    /* add modal section ==============  */
    const [employeeCreateModal, setEmployeeCreateModal] = useState({ type: false, data: null })
    const [employeeEditModal, setEmployeeEditModal] = useState({ type: false, data: null })

    return (
        <DashboardLayout>
            <section className="content-main">
                <div className="content-header">
                    <div>
                        <h2 className="content-title card-title">Customer  List</h2>
                    </div>
                    <div>
                        <a onClick={() => setEmployeeCreateModal({ type: !employeeCreateModal.type })} className="btn btn-primary btn-sm rounded">Create Coustomer</a>
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
                                </select>
                            </div>
                        </div>
                    </header>
                    <div className="col-md-12 px-4 ">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr className=''>
                                        <th>Name</th>
                                        <th>ComphonyName</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th className="text-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Loading && <GetSpinner />}
                                    {EmployeeData.map(data => <SingleCoustomer employeeEditModal={employeeEditModal} setEmployeeEditModal={setEmployeeEditModal} data={data} key={data.key}
                                    />
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <Pagination totalPages={data?.totalPages} setPagination={setPagination} pageIndex={pageIndex} pageSize={pageSize} />
            </section>
            <CoustomerCreate
                modal={employeeCreateModal}
                setOpen={setEmployeeCreateModal}
            />
            <CoustomerEdit
                modal={employeeEditModal}
                setOpen={setEmployeeEditModal}
            />
        </DashboardLayout>
    )
}

export default SettingSample1











