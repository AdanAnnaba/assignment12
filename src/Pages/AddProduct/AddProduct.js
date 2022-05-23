import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => {
        const product = data.name;
        console.log(product);
        
          axios.post(`http://localhost:5000/product`,{product});
  }

    return (
        <div>
             <form form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control w-full max-w-xs">
        <label class="label">
        <span class="label-text">Enter Your Email</span>
        </label>
        <input type="text"
         placeholder="Name"
          class="input input-bordered w-full max-w-xs"
          {...register("name", {
            required:{
              value: true,
              message: 'Name is required'
            }
          })}
          />
        <label class="label">
        {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
        </label>
        <input className='btn btn-primary' type="submit" />
        </div>
        </form>
        </div>
    );
};

export default AddProduct;