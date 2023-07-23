import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import AddCollege from "../../pages/AddCollege/AddCollege";
import SingleCollege from "../../pages/SingleCollege/SingleCollege";
const router=createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <Register></Register>
            },
            {
                path: '/addcollege',
                element: <AddCollege></AddCollege>
            },
            {
                path: 'singlecollege/:id',
                element:<SingleCollege></SingleCollege>,
                //loader: ({params})=>fetch(`https://toy-market-server-sepia.vercel.app/alltoys/${params.id}`)
            },
        ]
    }
])
export default router;