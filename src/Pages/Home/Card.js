import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({product, setSingle}) => {
  console.log(product.product.name);

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!{product.product.name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-center">  
    <label for="my-modal-6" class="btn btn-primary" onClick={()=>setSingle(product)}>Buy Now</label>
    </div>
  </div>
</div>
  );
};

export default Card;