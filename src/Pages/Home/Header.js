import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo1.png'
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
  const logout = () => {
    signOut(auth);
  };
  const [user, loading, error] = useAuthState(auth);
  console.log(user);

    return (
        <div class="navbar bg-primary">
        <div class="flex-1">
        <Link to='/' className='w-16'><img className='rounded-2xl' src={logo} alt="" /></Link>
        <Link to='/' className='text-white ml-3'>Home</Link>
        </div>
        <div class="flex-none gap-2">
        <ul className='flex gap-3 text-white'>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/addproduct'>Add Product</Link></li>
        {
          user? <li><button className='mr-3' onClick={logout}>Logout</button></li> : <li><Link to='/login' className='mr-3'>Login</Link></li>
        }
        </ul>
  </div>
</div>
    );
};

export default Header;