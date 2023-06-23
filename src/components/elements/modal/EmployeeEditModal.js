import React, { useEffect } from 'react'
import { employeeEditSchema } from '../../../helpers/validation/EmployeeSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useUpdateEmployeeMutation } from '../../../app/services/employee';
import { toast } from 'react-toastify';

function EmployeeEditModal({ modal, setOpen }) {
    const { type, data } = modal;
    const [UpdateEmploye, { isSuccess, isLoading }] = useUpdateEmployeeMutation()
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(employeeEditSchema) });
    const onSubmit = async (value) => {
        const Employeedata = { value, _id: data?._id }
        await UpdateEmploye(Employeedata)
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success('Employee Update!')
            reset()
            setOpen({ type: false })
        }
    }, [isSuccess])
    return (
        <>{
            type && <div className='modal_product'>
                <section className="content-main">
                    <div className="row">
                        <div className="col-12">
                            <div className="content-header">
                                <h2 className="content-title">Employees Edit</h2>
                                <button onClick={() => setOpen({ type: false }, reset())}>X</button>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="col-lg-12">
                                <div className="card mb-4">
                                    <div className="card-body">

                                        <div className="row gx-2">
                                            <div className="col-6 mb-3">
                                                <label className="form-label"> Name</label>
                                                <input className="form-control" type="text" placeholder="First name"
                                                    defaultValue={data?.name}
                                                    {...register("name")}

                                                />
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <label className="form-label">Phone</label>
                                                <input className="form-control" type="phone" placeholder="+01751499634"
                                                    defaultValue={data?.phone}
                                                    {...register("phone")}

                                                />
                                            </div>
                                        </div>
                                        <div className="row gx-2">
                                            <div className="col-lg-6 mb-3">
                                                <label className="form-label">NID</label>
                                                <input className="form-control" type="tel" placeholder="nid"
                                                    defaultValue={data?.nid}
                                                    {...register("nid")}
                                                />
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <label className="form-label">Address</label>
                                                <input className="form-control" type="text" placeholder="Type here"
                                                    {...register("address")}

                                                />
                                            </div>
                                        </div>
                                        <div className="row gx-2">
                                            <div className="col-lg-6 mb-3">
                                                <label className="form-label">City</label>
                                                <input className="form-control" type="text" placeholder="Type here"
                                                    defaultValue={data?.city}
                                                    {...register("city")}

                                                />
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <label className="form-label">State</label>
                                                <input className="form-control" type="text" placeholder="Zip code "
                                                    defaultValue={data?.state}
                                                    {...register("state")}

                                                />
                                            </div>
                                        </div>

                                        <div className="row gx-2">
                                            <div className="col-lg-6 mb-3">
                                                <label className="form-label">Zip Code</label>
                                                <input className="form-control" type="text" placeholder="Zip code "
                                                    defaultValue={data?.zip_code}
                                                    {...register("zip_code")}

                                                />
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <label className="form-label">Country</label>
                                                <input className="form-control" type="text" placeholder="Type here"
                                                    defaultValue={data?.country}
                                                    {...register("Country")}
                                                />
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div>
                            <button style={{ cursor: isLoading ? 'no-drop' : 'pointer' }} className="btn btn-md rounded font-sm hover-up">Submit</button>
                        </form>

                    </div>

                </section>

            </div>
        }
        </>
    )
}

export default EmployeeEditModal