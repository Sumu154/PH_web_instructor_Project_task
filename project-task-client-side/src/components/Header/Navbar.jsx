import '../../assets/stylesheets/navbar.css'

import React, { useContext } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import ThemeToggle from '../shared/ThemeToggle';
import axios from 'axios';



const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  // console.log('user', user.photoURL);

  const navigate = useNavigate();
  const path = useLocation().pathname;

  const handleSignOut = async(e) => {
    e.preventDefault();
    try{
      await signOutUser();

      // token clear
      const res2 = await axios.post('https://marathon-management-server-side.vercel.app/api/jwt/logout', {}, {withCredentials: true});
      console.log(res2.data);

      navigate('/auth/login');
    }
    catch(e){
      // console.log(e);
    }
  }




  const links = <>
    <li> <NavLink to="/"> Home </NavLink> </li>
    <li> <NavLink to="/allEvents"> All Events </NavLink> </li>
    <li> <NavLink to="/addEvent"> Add Event </NavLink> </li>
    <li> <NavLink to="/myEvents"> My Events </NavLink> </li>
  </>

  return (
    <div id='navbar' className='bg-background  dark:bg-darkbackground shadow-lg'>
      <div  className="navbar w-[90%] mx-auto  ">
      <div className="navbar-start">
        <div className="dropdown  ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden  dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0}  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-2 shadow    dark:bg-cardbackground dark:text-white">
            {links}
          </ul>
        </div>
        <Link to='/' className="text-magenta text-base sm:text-2xl font-bold"> Eventora </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1   dark:text-white">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeToggle></ThemeToggle>
        {user ? <div className='flex gap-4 items-center'>
          <button className='text-amber font-medium px-4 py-[6px] rounded-lg border-amber border-[1px] '> <Link onClick={handleSignOut} to=''> Logout </Link> </button> 
           <div className='h-9 w-9'>  <img className='rounded-full' src={user.photoURL} alt="" /> </div> 
        </div> 
        :<div className='flex gap-4'>
          <button className={`font-medium px-4 py-[6px] rounded-lg     ${path==='/auth/login' ? 'bg-amber text-white' : 'text-amber border-amber border-[1px]'} `}> <Link to='/auth/login'> Login </Link> </button> 
          <button className={`font-medium px-4 py-[6px] rounded-lg     ${path==='/auth/register' ? 'bg-amber text-white' : 'text-amber border-amber border-[1px]' } `}> <Link to='/auth/register'> Register </Link> </button>
        </div>              
        } 
      </div>
    </div>
    </div>
  );
};

export default Navbar;


