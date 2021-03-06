import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from './Loading';

const Myorders = () => {

    const [user, loading, error] = useAuthState(auth);
    const [purchaseproduct, setPurchaseproduct] = useState([]);
    
    useEffect(()=>{
     if(user){
        fetch(`https://salty-waters-02832.herokuapp.com/booking?email=${user.email}`,{
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accesstoken')}`
            }
        })
        .then(res=>{
            return res.json()
        
        })
        .then(data=>{
            setPurchaseproduct(data);
        })
        
     }

     if(loading){
      return <Loading></Loading>
    }
      
    },[user])

    const deleteID = id=>{
      axios.delete(`https://salty-waters-02832.herokuapp.com/user${id}`,{authorization: `Bearer ${localStorage.getItem('accesstoken')}`})
      .then(res=>{
        const data = res.data;
        console.log(data);
    })
  }
      


    return (
        <div class="overflow-x-auto">
        <table class="table w-full">
         
          <thead>
            <tr>
              <th>SL</th>
              <th>Transaction ID</th>
              <th>Email</th>
              <th>Product Name</th>
              <th>For Delete</th>
            </tr>
          </thead>
          <tbody>
           {
              purchaseproduct.map((p,index)=> <tr>
                <th>{index+1}</th>
                <td>{p._id}</td>
                <td>{p.email}</td>
                <td>{p.productName}</td>
                <td><button className='btn btn-warning' onClick={()=>deleteID(p._id)}>Delete</button></td>
              </tr>) 
           }
           
          </tbody>
        </table>
      </div>
    );
};

export default Myorders;