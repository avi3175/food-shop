import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Header from './Components/Header/Header.jsx';
import Login from './Components/Login/Login.jsx';
import Registration from './Components/Registration/Registration.jsx';
import Chefs from './Components/Chefs/Chefs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children:[
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/registration",
        element:<Registration></Registration>
      },
     
    ]
  },
  {
    path:"/home",
    element:<Home></Home>,
    loader:()=>fetch('http://localhost:5000/tong')
  },
  {
    path:"/chefs",
    element:<Chefs></Chefs>
    
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
