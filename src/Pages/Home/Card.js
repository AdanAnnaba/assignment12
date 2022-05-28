import React from 'react';


const Card = ({product, setSingle}) => {

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src={product.image} alt="Tools" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!{product.name}</h2>
    <p>Qty: {product.aquantity}</p>
    <div class="card-actions justify-center">  
    <label for="my-modal-6" class="btn bg-orange-300 border-0" onClick={()=>setSingle(product)}>Buy Now</label>
    </div>
  </div>
</div>
  );
};

export default Card;