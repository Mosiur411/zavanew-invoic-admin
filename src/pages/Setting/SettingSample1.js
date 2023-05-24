import React, { useEffect } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { employeeSchema } from '../../helpers/validation/EmployeeSchema';
import { useAddEmployeeMutation } from '../../app/services/employee';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function SettingSample1() {
    const [AddEmployee, { isError, isLoading, isSuccess }] = useAddEmployeeMutation()
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(employeeSchema) });
    const onSubmit = async (data) => {
        await AddEmployee(data)
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success('Employee  Add ')
            reset()
        }
        if (isError) {
            toast.error('sorry  not add!')
        }
    }, [isError, isSuccess])

    return (
        <DashboardLayout>
            {/*
            <section className="content-main">
                <div className="content-header">
                    <div>
                        <h2 className="content-title card-title">Employee  List</h2>
                    </div>
                    <div>
                        <Link to="/addproduct/1" className="btn btn-primary btn-sm rounded">Create Employee</Link>

                    </div>
                </div>
                <div className="card mb-4">
                    <header className="card-header">
                        <div className="row align-items-center">
                            <div className="col-md-3 col-12 me-auto mb-md-0 mb-3">
                                <input type="text" placeholder="Search..." className="form-control"

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
                                        <th>Product Name</th>
                                        <th>UPC</th>
                                        <th>Cost</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Order</th>
                                        <th className="text-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                        <td>sdf</td>
                                        <td>sdf</td>
                                        <td>sdf</td>
                                        <td>sdf</td>
                                        <td>sdf</td>
                                        <td>sdfsdf</td>
                                        <td className="text-end">
                                            <div className="text-end">
                                                <a  className="btn btn-sm font-sm rounded btn-brand"> <i className="material-icons md-edit"></i> Edit </a>
                                                <a className="btn btn-sm font-sm btn-light rounded"> <i className="material-icons md-delete_forever"></i> Delete </a>
                                            </div>
                                        </td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
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
                Pagination totalPages={data?.totalPages} setPagination={setPagination} pageIndex={pageIndex} pageSize={pageSize} />
            </section>
             */}



            <section className="content-main">
                <div className="content-header">
                    <h2 className="content-title">Employees Add</h2>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="col-lg-12">
                            <section className="content-body p-xl-4">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row gx-3">
                                                <div className="col-6 mb-3">
                                                    <label className="form-label"> Name</label>
                                                    <input className="form-control" type="text" placeholder="First name"
                                                        {...register("name")} />
                                                    {errors?.name && (
                                                        <span className="form__error">{errors?.name.message}</span>
                                                    )}
                                                </div>

                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label">Email</label>
                                                    <input className="form-control" type="email" placeholder="example@mail.com"
                                                        {...register("email")} />
                                                    {errors?.email && (
                                                        <span className="form__error">{errors?.email.message}</span>
                                                    )}
                                                </div>
                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label">Password</label>
                                                    <input className="form-control" type="password" placeholder="password"
                                                        {...register("password")} />
                                                    {errors?.Password && (
                                                        <span className="form__error">{errors?.Password.message}</span>
                                                    )}
                                                </div>
                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label">Phone</label>
                                                    <input className="form-control" type="phone" placeholder="+01751499634"
                                                        {...register("phone")}

                                                    />
                                                    {errors?.phone && (
                                                        <span className="form__error">{errors?.phone.message}</span>
                                                    )}
                                                </div>
                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label">NID</label>
                                                    <input className="form-control" type="tel" placeholder="nid"
                                                        {...register("nid")}
                                                    />
                                                    {errors?.nid && (
                                                        <span className="form__error">{errors?.nid.message}</span>
                                                    )}
                                                </div>
                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label">Address</label>
                                                    <input className="form-control" type="text" placeholder="Type here"
                                                        {...register("address")}
                                                    />
                                                    {errors?.address && (
                                                        <span className="form__error">{errors?.address.message}</span>
                                                    )}
                                                </div>
                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label">City</label>
                                                    <input className="form-control" type="text" placeholder="Type here"
                                                        {...register("city")}
                                                    />
                                                    {errors?.city && (
                                                        <span className="form__error">{errors?.city.message}</span>
                                                    )}
                                                </div>
                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label">Zip Code</label>
                                                    <input className="form-control" type="text" placeholder="Zip code "
                                                        {...register("zip_code")}
                                                    />
                                                    {errors?.city && (
                                                        <span className="form__error">{errors?.city.message}</span>
                                                    )}
                                                </div>
                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label">Country</label>
                                                    <input className="form-control" type="text" placeholder="Type here"
                                                        {...register("country")}
                                                    />
                                                    {errors?.country && (
                                                        <span className="form__error">{errors?.country.message}</span>
                                                    )}
                                                </div>



                                            </div>

                                        </div>

                                    </div>

                                    <br />
                                    <button style={{ cursor: isLoading ? 'no-drop' : 'pointer' }} className="btn btn-primary" type="submit">User Add</button>
                                </form>

                            </section>

                        </div>


                    </div>

                </div>

            </section>
        </DashboardLayout>
    )
}

export default SettingSample1