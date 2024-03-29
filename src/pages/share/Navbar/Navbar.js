import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';
import useSeller from '../../hooks/IsSeller/useSeller';
import useAdmin from '../../hooks/useAdmin';

import logo from '.././../../assets/images/logo.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
      logOut().then(() => {
        navigate("/login");
      });
    };


    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)


    const menuList = <>


        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>



        {
            isAdmin ?
                <>
                    {/* <li className='font-semibold'><Link to='/admin/dashboard'>Dashboard</Link></li> */}
                    <li className='font-semibold'><Link to='/admin/users/Seller'>All Seller</Link></li>
                    <li className='font-semibold'><Link to='/admin/users/Buyer'>All Buyer</Link></li>
                    <li className='font-semibold'><Link to='/admin/reportitem'>Reported Item</Link></li>
                </>

                :

                <>
                    {
                        isSeller ?
                            <>
                                <li className='font-semibold'><Link to='/Seller/addproduct'>Add Product</Link></li>
                                <li className='font-semibold'><Link to='/Seller/myproduct'>My Product</Link></li>

                            </>
                            :
                            <>
                                <li className='font-semibold'><Link to='/bookings'>My Order</Link></li>
                                <li className='font-semibold'><Link to='/wishlists'>Wish List</Link></li>

                            </>

                    }
                </>

        }

        {
            user?.email ?
                <li className='font-semibold bg-[#0891b2] text-white text-xl rounded-lg' onClick={handleLogOut}><Link>Log Out</Link></li>
                :
                <>
                    
                    <li className='font-semibold '><Link to='/login'>Login</Link></li>
                    <li className='font-semibold bg-[#0891b2] text-white text-xl rounded-lg'><Link to='/signup'>Sign Up</Link></li>
                </>
        }
       



    </>

    return (
        <div className="navbar bg-base-100 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 z-50 bg-white w-[300px] text-centertext-center">
                        {menuList}
                    </ul>
                </div>
                <div className="avatar">
                    <div className="w-16 rounded">
                        <img src={logo} alt="" />
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl font-bold pt-5" href='/'>Furnica</a>

                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuList}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;