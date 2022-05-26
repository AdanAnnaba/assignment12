import React from 'react';

const Purchase = ({single}) => {
    const booking = ()=>{

    }
    return (
        <div>
<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
    
  <div class="hero min-h-screen bg-base-200">
  <div class="hero-content">
   

        <form>
        <div className='grid grid-cols-1 md:grid-cols-2'>
        <div>
        <h1 class="text-5xl font-bold">{single.product.name}</h1>
        <p class="py-6">{single.product.email}</p>
    </div>
    <div>
      
      <input type="text" placeholder={single.product.name} class="input w-full max-w-xs mb-3 text-4xl" />
        <input type="text" placeholder="Type here" class="input w-full max-w-xs mb-3" />
        <input type="text" placeholder="Type here" class="input w-full max-w-xs mb-3" />
      </div>
        </div>
        <input type="submit" value="submit" class="btn btn-primary" />
        </form>
      <div class="modal-action">
      <label for="my-modal-6" class="btn btn-primary">Yay!</label>
    </div>
    
  </div>
</div>
  </div>
</div>
</div>
    );
};

export default Purchase;