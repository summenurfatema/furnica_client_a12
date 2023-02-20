import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../pages/share/Navbar/Navbar';

const SellerDashBoardLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default SellerDashBoardLayout;