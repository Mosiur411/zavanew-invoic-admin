
import React, { useEffect } from 'react'
import { coustomerSchema } from '../../../helpers/validation/CoustomerSchema'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useAddCoustomerMutation } from '../../../app/services/coustomer'
function CoustomerCreate({ modal, setOpen }) {
    const { type } = modal;
    const [AddCoustomer, { isError, isLoading, isSuccess }] = useAddCoustomerMutation()
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(coustomerSchema) });
    const onSubmit = async (data) => {
        await AddCoustomer(data)
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success('Coustomer  Add ')
            setOpen({ type: false })
            reset()
        }
        if (isError) {
            toast.error('sorry  not add!')
        }
    }, [isError, isSuccess])

    return (
        <>{
            type && <div className='modal_product'>
                <section className="content-main">
                    <div className="row">
                        <div className="col-12">
                            <div className="content-header">
                                <h2 className="content-title">Coustomer Add</h2>
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
                                                    {...register("name")} />
                                            </div>

                                            <div className="col-6 mb-3">
                                                <label className="form-label"> Comphony Name</label>
                                                <input className="form-control" type="text" placeholder="First name"
                                                    {...register("comphonyName")} />
                                                {errors?.comphonyName && (
                                                    <span className="form__error">{errors?.comphonyName.message}</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="row gx-2">
                                            <div className="col-lg-6 mb-3">
                                                <label className="form-label">Email</label>
                                                <input className="form-control" type="email" placeholder="example@mail.com"
                                                    {...register("email")} />

                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <label className="form-label">Phone</label>
                                                <input className="form-control" type="number" placeholder="+01751499634"
                                                    {...register("phone")}

                                                />
                                                {errors?.phone && (
                                                    <span className="form__error">{errors?.phone.message}</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="row gx-2">
                                            <div className="col-lg-6 mb-3">
                                                <label className="form-label">ETIN</label>
                                                <input className="form-control" type="text" placeholder="Type here"
                                                    {...register("etin")}
                                                />
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <label className="form-label">RESALE</label>
                                                <input className="form-control" type="text" placeholder="Type here"
                                                    {...register("resale")}
                                                />
                                            </div>
                                        </div>
                                        <div className="row gx-2">
                                            <div className="col-lg-6 mb-3">
                                                <label className="form-label">TOBACCO</label>
                                                <input className="form-control" type="text" placeholder="Type here"
                                                    {...register("tobacco")}
                                                />
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
                                        </div>
                                        <div className="row gx-2">
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
                                                <label className="form-label">State</label>
                                                <input className="form-control" type="text" placeholder="Type here"
                                                    {...register("state")}
                                                />
                                                {errors?.state && (
                                                    <span className="form__error">{errors?.state.message}</span>
                                                )}
                                            </div>

                                        </div>
                                        <div className="row gx-2">

                                            <div className="col-lg-6 mb-3">
                                                <label className="form-label">Zip Code</label>
                                                <input className="form-control" type="text" placeholder="Type here"
                                                    {...register("zip_code")}
                                                />
                                                {errors?.zip_code && (
                                                    <span className="form__error">{errors?.zip_code.message}</span>
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

export default CoustomerCreate



