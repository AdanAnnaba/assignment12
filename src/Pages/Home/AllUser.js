import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllUser = () => {
    const [users, setUsers] = useState('');

    useEffect(()=>{
        axios.get('https://salty-waters-02832.herokuapp.com/users')
        .then(res=>{
            const data = res.data;
            setUsers({data});
            console.log(users);
        })
    },[])


    return (
        <div>
          {
              users.map(user=>
                  <p>Email: {user.email}</p>
              )
          }
           
        </div>
    );
};

export default AllUser;