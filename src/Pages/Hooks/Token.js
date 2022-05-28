import { useEffect, useState } from "react"
import axios from 'axios';


const Token = user =>{
    const [token, setToken] = useState('');
    useEffect(()=>{
        const email = user?.user?.email;
        const presentUser ={email:email};
        if(email){
            axios.put(`https://salty-waters-02832.herokuapp.com/user/${email}`,(presentUser))
            .then(res=>{
            const data = res.data;
            console.log('This is token',token);
            const finalToken = data.token;
            localStorage.setItem('accesstoken',finalToken)
            setToken(finalToken)
        })
        }
    },[user]);
    return [token]
}

export default Token;