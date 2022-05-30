import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllUser = () => {
    const [allusers, setAllusers] = useState('');
    useEffect(()=>{
        axios.get(`http://localhost:5000/user`)
        .then(res=>{
            const data = res.data;
            console.log(data);
        })
    },[])
    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default AllUser;