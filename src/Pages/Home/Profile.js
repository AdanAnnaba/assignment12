import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from './Loading';

const Profile = () => {

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
            console.log('ABC',res)
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


    return (
        <div class="overflow-x-auto">
        <table class="table w-full">
         
          <thead>
            <tr>
              <th></th>
              <th>Name{purchaseproduct.length}</th>
              <th>Email</th>
              <th>Product Name</th>
            </tr>
          </thead>
          <tbody>
           {
              purchaseproduct.map(p=> <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>{p.email}</td>
                <td>Blue</td>
              </tr>) 
           }
           
          </tbody>
        </table>
      </div>
    );
};

export default Profile;