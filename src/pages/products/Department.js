import { useEffect } from 'react'
import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { useForm } from 'react-hook-form'
import { DepartmentSchema } from '../../helpers/validation/DepartmentSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAddDepartmentMutation, useGetDepartmentQuery } from '../../app/services/department'
import { toast } from 'react-toastify'
import SingleDepartment from '../../components/elements/product/SingleDepartment'
import { useState } from 'react'
import GetSpinner from '../../helpers/shared/GetSpinner'
function Department() {
    const [Loading, setLoading] = useState(false)
    const { data, isLoading: deparmentLoging } = useGetDepartmentQuery()
    const [AddDepartment, { isError, isLoading, isSuccess }] = useAddDepartmentMutation()
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(DepartmentSchema) });
    const onSubmit = async (data) => {
        await AddDepartment({ name: data?.department })
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success('Department Add !')
        }
        if (isError) {
            toast.error('sorry deparment not add!')
        }
        if (deparmentLoging) {
            setLoading(true)
        }else{
            setLoading(false)
        }
    }, [isError, isLoading, isSuccess, deparmentLoging])

    return (
        <DashboardLayout>
            <section className="content-main">
                <div className="content-header">
                    <div>
                        <h2 className="content-title card-title">Department</h2>
                        <p>Add, edit or delete a Department</p>
                    </div>
                    <div>
                        <input type="text" placeholder="Search Categories" className="form-control bg-white" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-4">
                                        <label htmlFor="product_name" className="form-label">Department Name</label>
                                        <input type="text" placeholder="Type here" className="form-control" id="product_name"
                                            {...register("department")}
                                        />
                                        {errors?.department && (
                                            <span className="form__error">{errors?.department.message}</span>
                                        )}
                                    </div>
                                    <div className="d-grid">
                                        <button style={{ cursor: isLoading ? 'no-drop' : 'pointer' }} className="btn-primary w-100 text-center">Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-9">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Department</th>
                                                <th>Email</th>
                                                <th className="text-end">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Loading && <GetSpinner />}
                                            {data?.development?.map(data => <SingleDepartment data={data} key={data.key} />
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </DashboardLayout>
    )
}
export default Department