import React from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  }
    return (
        <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body w-80 min-h-full">
       
        <form form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control w-full max-w-xs">
        <label class="label">
        <span class="label-text">Enter Your Email</span>
        </label>
        <input type="email"
         placeholder="Email"
          class="input input-bordered w-full max-w-xs"
          {...register("email", {
            required:{
              value: true,
              message: 'Email is required'
            },
            pattern: /[A-Za-z]{3}/,
            message: 'Please enter a valid email'
          })}
          />
        <label class="label">
        {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
        
        </label>
        <label class="label">
        <span class="label-text">Enter Your Password</span>
        </label>
        <input type="password"
         placeholder="password"
          class="input input-bordered w-full max-w-xs"
          {...register("password", {
            required:{
              value: true,
              message: 'Password is required'
            },
            minLength:{
              value: 6,
            message: 'Please enter atleast six caracter'
            }
          })}
          />
        <label class="label">
        {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
        {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
        
        </label>
        <input className='btn btn-primary' type="submit" />
        </div>
        </form>
        <div class="divider mt-0 mb-0">OR</div>
        <div class="form-control">
          <button onClick={()=>signInWithGoogle()} class="btn btn-primary">Signin With Google</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;