import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const onSubmit = data => {
        const product = {
          name: data.name,
          email: data.email
        }
        reset();
        console.log(product);
        
        axios.post(`http://localhost:5000/product`,{product});
  }

    return (
        <div>
             <form form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control w-full max-w-xs">
        <label class="label">
        <span class="label-text">Enter Your Name</span>
        </label>
        <input type="text"
         placeholder="Name"
          class="input input-bordered w-full max-w-xs"
          {...register("name",)}
          />
        <label class="label">
        </label>
        <label class="label">
        <span class="label-text">Enter Your Name</span>
        </label>
        <input type="email"
         placeholder="Email"
          class="input input-bordered w-full max-w-xs"
          {...register("email",)}
          />
        <label class="label">
        </label>
        <input className='btn btn-primary' type="submit" />
        </div>
        </form>
        </div>
    );
};

export default AddProduct;