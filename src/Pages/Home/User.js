import React from 'react';
import { toast } from 'react-toastify';

const User = ({user,index,refetch}) => {
  const {email,role} = user;
  const createAdmin = () =>{
    fetch(`https://salty-waters-02832.herokuapp.com/user/admin/${email}`,{
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accesstoken')}`
      }
    })
    .then(res=>res.json())
    .then(data=>{
      refetch();
      toast.success("Created an admin successfully", {
        position: toast.POSITION.TOP_RIGHT
      });
    })
  }

    return (
            <tr>
                    <th>{index+1}</th>
                    <td>{user.displayName}</td>
                    <td>{email}</td>
                    <td>{role !== 'admin' && <button onClick={createAdmin} className='btn btn-xs bg-green-400'>Create Admin</button>}</td>
                    <td><button className='btn btn-xs bg-red-700'>Remove User</button></td>
                  </tr>
    );
};

export default User;