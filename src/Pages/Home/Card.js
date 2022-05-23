import React from 'react';

const Card = ({product,setIddata}) => {

    
    console.log(product.product);
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!{product.product}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-center">     
    <label for="my-modal" onClick={()=>setIddata(product)} class="btn btn-primary w-96">Purchase </label>   
    </div>
  </div>
</div>
    );
};

export default Card;