import React from 'react';

const User = ({user,index}) => {
  const {email,role} = user;
  console.log(email);
  const createAdmin = () =>{
    fetch(`https://salty-waters-02832.herokuapp.com/user/admin${email}`,{
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accesstoken')}`
      }
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
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