import React from 'react';
import { Outlet } from 'react-router-dom';
import SellerNav from '../pages/SellerDashboard/SellerNav/SellerNav';

const SellerDashBoardLayout = () => {
    return (
        <div>
            <SellerNav></SellerNav>
            <Outlet></Outlet>
        </div>
    );
};

export default SellerDashBoardLayout;