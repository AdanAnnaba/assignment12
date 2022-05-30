import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllUser = () => {
    const [allusers, setAllusers] = useState('');
    useEffect(()=>{
        axios.get(`https://salty-waters-02832.herokuapp.com/user`)
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