import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Home/Services/Products/Products";
import ServiceAdd from "../../Pages/Home/Services/ServiceAdd/ServiceAdd";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    { 
       path:'/',
       element: <Main></Main>,
       children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/serviceAdd',
            element: <ServiceAdd></ServiceAdd>,
        },
        {
            path: '/services',
            element: <Services></Services>

        },
        {
            path: '/products/:id',
            element: <Products></Products>,
            loader:({params}) => fetch(`https://online-teaching-services-server.vercel.app/services/${params.id}`)

        },
        
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element:<SignUp></SignUp>
        },
        {
            path: '/checkout/:id',
            element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
            loader:({params}) => fetch(`https://online-teaching-services-server.vercel.app/services/${params.id}`)
        },
        {
            path: '/reviews',
            element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        }
       ]
    }
    ])

    export default router;