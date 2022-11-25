import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/share/Footer/Footer';
import Navber from '../../pages/share/Navber/Navber';


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