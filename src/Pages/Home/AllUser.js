import React from 'react';
import { useQuery } from 'react-query';
import Loading from './Loading';
import User from './User';

const AllUser = () => {
   const {data: users, isLoading} = useQuery('users', ()=> fetch('https://salty-waters-02832.herokuapp.com/user',{
     method: 'GET',
     headers:{
       authorization: `Bearer ${localStorage.getItem('accesstoken')}`
     }
   })
   .then(res=>res.json())
   );
   if(isLoading){
     return <Loading></Loading>
   }


    return (
        <div>
            <div class="overflow-x-auto">
            <table class="table w-full">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Name</th>
                  <th>Email Address</th>
                  <th>Role</th>
                  <th>For Remove</th>
                </tr>
              </thead>
              <tbody>
               {
                    users.map((user,index)=><User key={user._id} user={user} index={index}></User>
                    )
               }
              </tbody>
            </table>
          </div>
        

        </div>
    );
};

export default AllUser;