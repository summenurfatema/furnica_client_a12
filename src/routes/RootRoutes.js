import { createBrowserRouter } from "react-router-dom";
import AdminDashBoardLayout from "../layouts/AdminDashBoardLayout";
import Main from "../layouts/Main/Main";
import SellerDashBoardLayout from "../layouts/SellerDashBoardLayout";
import AllBuyer from "../pages/Admin/AllBuyer/AllBuyer";
import AllUser from "../pages/Admin/AllUser/AllUser";
import ReportItem from "../pages/Admin/ReportItem/ReportItem";
import Blog from "../pages/Blog/Blog";
import Error from "../pages/Error/Error";
import CategoryItems from "../pages/Home/Categories/CategoryItems";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyOrders from "../pages/SellerDashboard/MyOrders/MyOrders";
import AddProduct from "../pages/SellerDashboard/AddProduct/AddProduct";
import MyProducts from "../pages/SellerDashboard/AddProduct/MyProduct/MyProducts";
import SellerDashboard from "../pages/SellerDashboard/SellerDashboard";

import SignUp from "../pages/SignUp/SignUp";
import WishList from "../pages/WishList/WishList";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {

        path: '/',
        element: <Main></Main>,


        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

            {
                path: '/bookings',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/furnitures/:category',
                element: <PrivateRoute><CategoryItems></CategoryItems></PrivateRoute>,

                loader: ({ params }) => fetch(`https://furnica-server.onrender.com/furnitures/${params.category}`)
            },
            {
                path: '/wishlists',
                element: <WishList></WishList>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }


        ]
    },
    {
        path: '/Seller',
        element: <SellerDashBoardLayout></SellerDashBoardLayout>,
        children: [
            {
                path: '/Seller',
                element: <SellerDashboard></SellerDashboard>


            },
            {
                path: '/Seller/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/Seller/myproduct',
                element: <MyProducts></MyProducts>
            },
          



        ]

    },

    {
        path: '*',
        element: <Error></Error>
    },
    {
        path: '/admin',
        element: <AdminDashBoardLayout></AdminDashBoardLayout>,
        children: [
           
            
            {
                path: '/admin/users/:role',
                element: <AllBuyer></AllBuyer>,
                loader: ({ params }) => fetch(`https://furnica-server.onrender.com/users/${params.role}`)
            },

            {
                path: '/admin/dashboard',
                element: <AllUser></AllUser>
            },
            {
                path: '/admin/reportitem',
                element: <ReportItem></ReportItem>
            }

        ]
    }

])
export default router;