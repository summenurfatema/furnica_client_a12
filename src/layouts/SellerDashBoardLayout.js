import React from 'react';
import { Outlet } from 'react-router-dom';
import SellerNav from '../pages/SellerDashboard/SellerNav/SellerNav';
import Navber from '../pages/share/Navber/Navber';

const SellerDashBoardLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default SellerDashBoardLayout;