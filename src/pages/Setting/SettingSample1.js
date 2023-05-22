import React, { useEffect } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { employeeSchema } from '../../helpers/validation/EmployeeSchema';
import { useAddEmployeeMutation } from '../../app/services/employee';
import { toast } from 'react-toastify';

function SettingSample1() {
    const [AddEmployee, { isError, isLoading, isSuccess }] = useAddEmployeeMutation()
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(employeeSchema) });
    const onSubmit = async (data) => {
        await AddEmployee(data)
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success('Employee  Add ')
        }
        if (isError) {
            toast.error('sorry  not add!')
        }
    }, [isError, isSuccess])

    return (
        <DashboardLayout>
            <section className="content-main">
                <div className="content-header">
                    <h2 className="content-title">Profile setting</h2>
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