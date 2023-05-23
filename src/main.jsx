import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Registration from './Components/Registration/Registration.jsx';
import Chefs from './Components/Chefs/Chefs.jsx';
import Main from './Components/Layout/Main.jsx';
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import PrivateRoute from './Components/Routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <LandingPage></LandingPage>
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/tong')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/chefs",
        element: <PrivateRoute><Chefs></Chefs></PrivateRoute>
    
      },

    ]
  },

  // {
  //   path: "/chefs",
  //   element: <Chefs></Chefs>

  // },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
