import React from 'react';

const Modal = ({id_data}) => {
    console.log(id_data);
    return (
        <div>
           
<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">{id_data._id}</h3>
    <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="my-modal" class="btn">Yay!</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default Modal;