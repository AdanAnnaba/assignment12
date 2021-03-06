import React from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Token from '../Hooks/Token';


const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [token] = Token(user || guser)

  if(token){
    navigate(from,{replace:true});
    toast.success("You are login successfully", {
      position: toast.POSITION.TOP_RIGHT
    });
  }

if(error){
  toast.error("Please Check Your Email And Password", {
    position: toast.POSITION.TOP_RIGHT
  });
}

  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password)
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
        <div><p>{Error}</p></div>
        <input className='btn btn-primary' type="submit" />
        </div>
        </form>
        <div class="divider mt-0 mb-0">OR</div>
        <div class="form-control">
          <button onClick={()=>signInWithGoogle()} class="btn btn-primary">Signin With Google</button>
        </div>
        <div>
          <span><Link to='/signup'>Please Sign Up</Link></span>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;