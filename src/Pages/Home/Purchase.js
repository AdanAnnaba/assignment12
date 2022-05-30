import React from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = ({single}) => {
  const [user, loading, error] = useAuthState(auth);
  const {name, aquantity, mquantity, description, image} = single;

    const booking = event=>{
      event.preventDefault();
      console.log(event);

      const purchasedata = {
        productName: name,
        name: user.displayName,
        email: user.email
      }
      console.log(purchasedata);
      axios.post(`http://localhost:5000/booking`,(purchasedata))
      .then(res=>{
        const data = res.data;
        if(data.success){
          toast('Your Booking Successfully Submitted!')
        }
        else{
          toast('You already book this item')
        }
    })

    }
    return (
        <div>
        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
    
        <div class="hero min-h-screen bg-base-200">
        <div class="hero-content">
        <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

        <form onSubmit={booking}>
        <div className='grid grid-cols-1 md:grid-cols-2'>
        <div>
        <h3 class="text-2xl font-bold">{name}</h3>
        <div><img className='w-full ' src={image} alt="" /></div>
        <p class="py-6">Available Qty: {aquantity}</p>
        <p class="py-6">Price: {mquantity}$</p>
        <p class="py-6">{description}</p>
    </div>
    <div>
      
      
      <input type="text" placeholder={user.displayName} disabled class="input w-full max-w-xs mb-2 text-3xl" />
        <input type="text" placeholder={user.email} disabled class="input w-full max-w-xs mb-2" />
        <input type="text" placeholder="Type here" class="input w-full max-w-xs mb-3" />
      </div>
        </div>
        <input type="submit" value="submit" class="btn bg-orange-300 border-0" />
        </form>
  </div>
</div>
  </div>
</div>
</div>
    );
};

export default Purchase;