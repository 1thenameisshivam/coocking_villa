import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Aboutus from './components/Aboutus.jsx'
import Error from './components/Error.jsx'
import Contactus from './components/Contactus.jsx';
import Body from './components/Body.jsx';
import ResturentMenue from './components/ResturentMenue.jsx';
import Cart from './components/Cart.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/aboutus",
        element: <Aboutus/>,
      },
      {
        path: "/contactus",
        element: <Contactus/>,
      },
      {
        path: "/resturent/:resid",
        element: <ResturentMenue/>,
      },
      {
        path: "/cart",
        element:<Cart/>
      },
    ],
    errorElement:<Error/>
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
