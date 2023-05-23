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
import Blog from './Components/Blog/Blog.jsx';
import Error from './Components/Error/Error.jsx';
import Future from './Components/Future/Future.jsx';
import Footer from './Components/Footer/Footer.jsx';

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
        loader: () => fetch('https://tong-server.vercel.app/tong')
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
      {
        path: "/blog",
        element: <Blog></Blog>
    
      },
      {
        path: "/future",
        element: <Future></Future>
    
      },
      {
        path: "/footer",
        element: <Footer></Footer>
    
      },
      {
        path: "/*",
        element: <Error></Error>
    
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
