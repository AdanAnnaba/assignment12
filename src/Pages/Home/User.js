import React from 'react';

const User = ({user,index}) => {
    return (
            <tr>
                    <th>{index+1}</th>
                    <td>{user.displayName}</td>
                    <td>{user.email}</td>
                    <td><button className='btn btn-xs bg-green-400'>Create Admin</button></td>
                    <td><button className='btn btn-xs bg-red-700'>Remove User</button></td>
                  </tr>
    );
};

export default User;