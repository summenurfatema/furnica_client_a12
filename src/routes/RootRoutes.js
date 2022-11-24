import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import AllItems from "../pages/AllItems/AllItems";
import CategoryCard from "../pages/Home/Categories/CategoryCard";
import CategoryItems from "../pages/Home/Categories/CategoryItems";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyOrders from "../pages/MyOrders/MyOrders";
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
    }
])
export default router;