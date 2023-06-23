import React, { useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useUpdateCoustomerMutation } from '../../../app/services/coustomer';
import { coustomerSchema } from '../../../helpers/validation/CoustomerSchema';

function CoustomerEdit({ modal, setOpen }) {
    const { type, data } = modal;
    const [UpdateCoustomer, { isSuccess, isLoading }] = useUpdateCoustomerMutation()
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(coustomerSchema) });
    const onSubmit = async (value) => {
        const Coustomerdata = { value, _id: data?._id }
        await UpdateCoustomer(Coustomerdata)
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success('Coustomer Update!')
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
                                <h2 className="content-title">Coustomer Edit</h2>
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
                                                    {...register("name")} />
                                            </div>

                                            <div className="col-6 mb-3">
                                                <label className="form-label"> Comphony Name</label>
                                                <input className="form-control" type="text" placeholder="First name"
                                                    defaultValue={data?.comphonyName}
                                                    {...register("comphonyName")} />

                                            </div>
                                        </div>
                                        <div className="row gx-2">
                                            <div className="col-lg-6 mb-3">
                                                <label className="form-label">Email</label>
                                                <input className="form-control" type="email" placeholder="example@mail.com"
                                                    defaultValue={data?.email}
                                                    {...register("email")} />

                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <label className="form-label">Phone</label>
                                                <input className="form-control" type="number" placeholder="+01751499634"
                                                    defaultValue={data?.phone}
                                                    {...register("phone")}

                                                />
                                            </div>
                                        </div>
                                        <div className="row gx-2">
                                            <div className="col-lg-6 mb-3">
                                                <label className="form-label">ETIN</label>
                                                <input className="form-control" type="text" placeholder="Type here"
                                                    defaultValue={data?.etin}
                                                    {...register("etin")}
                                                />
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <label className="form-label">RESALE</label>
                                                <input className="form-control" type="text" placeholder="Type here"
                                                    defaultValue={data?.resale}
                                                    {...register("resale")}
                                                />
                                            </div>
                                        </div>
                                        <div className="row gx-2">
                                            <div className="col-lg-6 mb-3">
                                                <label className="form-label">TOBACCO</label>
                                                <input className="form-control" type="text" placeholder="Type here"
                                                    defaultValue={data?.tobacco}
                                                    {...register("tobacco")}
                                                />
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <label className="form-label">Address</label>
                                                <input className="form-control" type="text" placeholder="Type here"
                                                    defaultValue={data?.address}
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
                                                <input className="form-control" type="text" placeholder="Type here"
                                                    defaultValue={data?.state}
                                                    {...register("state")}
                                                />

                                            </div>
                                        </div>

                                        <div className="row gx-2">
                                            <div className="col-lg-6 mb-3">
                                                <label className="form-label">Zip Code</label>
                                                <input className="form-control" type="text" placeholder="Type here"
                                                    defaultValue={data?.zip_code}
                                                    {...register("zip_code")}
                                                />
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <label className="form-label">City</label>
                                                <input className="form-control" type="text" placeholder="Type here"
                                                    defaultValue={data?.country}
                                                    {...register("country")}
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

export default CoustomerEdit