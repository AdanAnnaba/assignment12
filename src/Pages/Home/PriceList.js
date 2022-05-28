import React from 'react';
import price from '../../assets/price.jpg';

const PriceList = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src={price} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
            <h1 className='text-4xl mt-20 uppercase font-bold text-orange-400 mb-8 mt-0'><span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-400 relative inline-block mr-2">
            <span class="relative text-white">Annaba</span>
            </span>Hand Tools</h1> <h2 className='text-3xl uppercase font-bold mx-4'>Expore our latest price list & catalogue
</h2>
      <button class="btn bg-orange-400 mt-8 border-0">GET PRICE LIST</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default PriceList;