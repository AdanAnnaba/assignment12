import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-start justify-start">
    <h2 className='text-4xl text-yellow-400'>Dashboard</h2>
    <Outlet></Outlet>
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 m-0 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard'>My Orders</Link></li>
      <li><Link to='/dashboard/profile'>My Profile</Link></li>
      <li><Link to='/dashboard/reviews'>Add a review</Link></li>
      <li><Link to='/dashboard/addproduct'>Add Products</Link></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;