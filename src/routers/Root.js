import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout />,
        children:[
            {
                path:"/",
                element: <Home />
            },
            {
                path:"/About",
                element: <About />
            },{
                path:"/Services",
                element: <Service />
            },{
                path:"/Contact",
                element: <Contact />
            }
        ]
    }
])