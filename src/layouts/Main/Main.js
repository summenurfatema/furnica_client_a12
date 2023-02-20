import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/share/Footer/Footer';
import Navber from '../../pages/share/Navbar/Navbar';


const Main = () => {




    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;