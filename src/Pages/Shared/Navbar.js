import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import '../Shared/Navbar.css';

const Navbar = () => {

  const [user, loading, error] = useAuthState(auth);

  const logOut = () => {
    signOut(auth);
  }

  const menuItems = [<>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/appointment'>Appointment</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/reviews'>Reviews</Link></li>
    <li><Link to='/contact'>Contact Us</Link></li>
    {
      user && <li><Link to='/dashboard'>Dashboard</Link></li>
    }
    <li>{user ? <button onClick={logOut} className="btn btn-ghost">Sign Out</button> : <Link to='/login'>Login</Link>}</li>
  </>
  ]
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menuBackground menu-compact dropdown-content mt-3 p-2 shadow menuItems rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xxl Logo">Doctors Portal</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xxl menuItems">
          {menuItems}
        </ul>
      </div>
      <div className='navbar-end'>
        <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      </div>

    </div>
  );
};

export default Navbar;