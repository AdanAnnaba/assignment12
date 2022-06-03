import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import AdminAuth from '../Hooks/AdminAuth';
import Loading from './Loading';
import { signOut } from 'firebase/auth';

const ReqAdmin = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = AdminAuth(user)
    const location = useLocation();

    if(loading || adminLoading){
        return <Loading></Loading>
    }
    
    if(!user || !admin){
        signOut(auth);
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default ReqAdmin;