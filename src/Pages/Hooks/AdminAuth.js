import { useEffect, useState } from "react"

const AdminAuth = user =>{
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(()=>{
        const email = user?.email;
        if(email){
            fetch(`https://salty-waters-02832.herokuapp.com/admin/${email}`,{
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accesstoken')}`
      }
    })
    .then(res=>res.json())
    .then(data=>{
        setAdmin(data.admin);
        setAdminLoading(false)
    })
        }
    },[user])
    return [admin, adminLoading]
}
export default AdminAuth;