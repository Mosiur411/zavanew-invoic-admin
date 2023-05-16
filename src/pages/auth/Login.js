import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from '../../helpers/validation/LoginSchema';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/Firebase.config';
export default function Login() {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
  ] = useSignInWithEmailAndPassword(auth);

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(LoginSchema) });
  const onSubmit = async (data) => {
    const email = data?.email;
    const password = data?.password;
    await signInWithEmailAndPassword(email, password)


    
  }

  return (
    <main>
      <section className="content-main mt-80 pb-80">
        <div className="card mx-auto card-login">
          <div className="card-body">
            <h4 className="card-title mb-4">Sign in</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <input className="form-control" placeholder="email" type="email" {...register("email")} />
                {errors?.email && (
                  <span className="form__error">{errors?.email?.message}</span>
                )}
              </div>
              <div className="mb-3">
                <input className="form-control" placeholder="Password" type="password" {...register("password")} />
                {errors?.password && (
                  <span className="form__error">{errors?.password?.message}</span>
                )}
              </div>
              <div className="mb-3">
                <a href="#" className="float-end font-sm text-muted">Forgot password?</a>
                <label className="form-check">
                  <input type="checkbox" className="form-check-input" checked="" />
                  <span className="form-check-label">Remember</span>
                </label>
              </div>
              <div className="mb-4">
                <button type="submit" className="btn-primary w-100">Login</button>
              </div>
            </form>
            <p className="text-center mb-4">Don't have account? <Link to='/register'>Sign up</Link></p>
          </div>
        </div>
      </section>
    </main>
  )
}
