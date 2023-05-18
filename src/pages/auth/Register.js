import React, { useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { reisterSchema } from '../../helpers/validation/ResiterSchema';
import { auth } from '../../firebase/Firebase.config';
import { toast } from 'react-toastify';
import { useAddUserMutation } from '../../app/services/authUser';

function Register() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(reisterSchema) });
    const [createUserWithEmailAndPassword, loading,] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const [addUser] = useAddUserMutation();
    if (error) {
        toast.error(error.message)
    }
    if (sending) {
        toast.success(sending?.message)
    }
    const onSubmit = async (data) => {
        const email = data?.email;
        const password = data?.password;
        const user = await createUserWithEmailAndPassword(email, password)
        await addUser(user?.user)
        /* ================ user register ================  */

        await sendEmailVerification();
        toast.success("Plz check your email")
        navigate("/verifie")
    }

    return (
        <main>
            <section className="content-main mt-80 ">
                <div className="card mx-auto card-login">
                    <div className="card-body">
                        <h4 className="card-title mb-4">Create an Account</h4>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input className="form-control" placeholder="Your email" type="email" {...register("email")} />
                                {errors?.email && (
                                    <span className="form__error">{errors?.email.message}</span>
                                )}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Create password</label>
                                <input className="form-control" placeholder="password" type="password" {...register("password")} />
                                {errors?.password && (
                                    <span className="form__error">{errors?.password?.message}</span>
                                )}
                            </div>
                            <div className="mb-3">
                                <p className="small text-center text-muted">By signing up, you confirm that you’ve read and accepted our User Notice and Privacy Policy.</p>
                            </div>
                            <div className="mb-4 text-center">
                                <button type="submit" className="btn-primary w-100 text-center">Register</button>{/* btn  btn-primary w-100 text-center */}
                            </div>
                        </form>
                        <p className="text-center mb-2">Already have an account? <Link to='/login'>Sign in now</Link></p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Register