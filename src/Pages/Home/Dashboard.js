import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import AdminAuth from '../Hooks/AdminAuth';



const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = AdminAuth(user)


    return (
        <div>
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-start justify-start">
       <h2 className='text-4xl text-yellow-400 mb-3'>Welcome To Dashboard</h2>
       <Outlet></Outlet>
       <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 m-0 overflow-y-auto w-80 bg-base-100 text-base-content">
  
      <li><Link to='/dashboard'>My Home</Link></li>
      <li><Link to='/dashboard/myorders'>My Orders</Link></li>
      <li><Link to='/dashboard/reviews'>Add a review</Link></li>
      <li><Link to='/dashboard/addproduct'>Add Products</Link></li>
      {admin && <li><Link to='/dashboard/allusers'>All User</Link></li>}
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;