import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import SellerDashBoardLayout from "../layouts/SellerDashBoardLayout";

import AllItems from "../pages/AllItems/AllItems";

import CategoryItems from "../pages/Home/Categories/CategoryItems";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyOrders from "../pages/MyOrders/MyOrders";
import AddProduct from "../pages/SellerDashboard/AddProduct/AddProduct";
import MyProducts from "../pages/SellerDashboard/AddProduct/MyProduct/MyProducts";
import SellerDashboard from "../pages/SellerDashboard/SellerDashboard";

import SignUp from "../pages/SignUp/SignUp";
import WishList from "../pages/WishList/WishList";

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
                path: '/furnitures',
                element: <AllItems></AllItems>
            },
            {
                path: '/bookings',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/furnitures/:category',
                element: <CategoryItems></CategoryItems>,

                loader: ({ params }) => fetch(`http://localhost:5000/furnitures/${params.category}`)
            },
            {
                path: '/wishlists',
                element: <WishList></WishList>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <SellerDashBoardLayout></SellerDashBoardLayout>,
        children: [
            {
                path: '/dashboard/Seller',
                element: <SellerDashboard></SellerDashboard>


            },
            {
                path: '/dashboard/Seller/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/Seller/myproduct',
                element: <MyProducts></MyProducts>
            }

        ]
    }
])
export default router;