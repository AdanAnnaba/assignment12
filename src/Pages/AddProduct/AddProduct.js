import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageBbKey = '38699dc715ebdd8bc748571a5d704242'
  const onSubmit = async data => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageBbKey}`;

    axios.post(`${url}`,(formData))
    .then(res=>{
      const image = res.data;
      if(image.success){
        const img = image.data.url;
        
        const product = {
          name: data.name,
          mquantity: data.mquantity,
          description: data.description,
          aquantity: data.aquantity,
          image: img
        }
        reset();
        axios.post(`http://localhost:5000/product`,(product));
        console.log(product);
      }

  })     
        
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