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
             <h3 className='text-3xl text-center mb-2'>Enter Your Product Information</h3>
        <div class="form-control w-full max-w-xs">
          

        <input type="text"
         placeholder="Product Name"
          class="input input-bordered w-full max-w-xs"
          {...register("name",)}
          />
      
        
        <input type="text"
         placeholder="Minimum Quantity"
          class="input input-bordered w-full max-w-xs"
          {...register("mquantity",)}
          />
        <input type="text"
         placeholder="Product Description"
          class="input input-bordered w-full max-w-xs"
          {...register("description",)}
          />
        <input type="text"
         placeholder="Available Quantity"
          class="input input-bordered w-full max-w-xs"
          {...register("aquantity",)}
          />  
        <input type="text"
         placeholder="price"
          class="input input-bordered w-full max-w-xs"
          {...register("price",)}
          />
        <input type="file"
         placeholder="Product Image"
          class="input input-bordered w-full max-w-xs"
          {...register("image",)}
          />
        
        <input className='btn btn-primary' type="submit" />
        </div>
        </form>
        </div>
    );
};

export default AddProduct;