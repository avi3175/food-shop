import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
    }
    return (
        <div>
            <div className='flex justify-between sm:flex-col-reverse md:flex-row'>
                <div>
                    <Link to="/">
                        <h1 className='font-bold text-yellow-500 text-3xl'>TONG GHOR</h1>
                    </Link>

                </div>

                <div className='flex gap-5 justify-between items-center sm:flex-col-reverse md:flex-row-reverse '>

                    {/* <img src="https://static.vecteezy.com/system/resources/previews/011/482/129/original/simple-and-hot-tea-logo-design-template-tea-cup-logo-design-free-vector.jpg" alt="" className='w-16' /> */}

                    <NavLink
                        to="/home"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? "red" : "black",
                            };
                        }}
                    >
                        <p>HOME</p>
                    </NavLink>
                    <NavLink
                        to="/blog"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? "red" : "black",
                            };
                        }}
                    >
                        <p>BLOG</p>
                    </NavLink>

                    {
                        user ? <button onClick={handleLogOut}>LOG OUT</button>
                            :
                            <NavLink
                                to="/login"
                                style={({ isActive, isPending }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        color: isPending ? "red" : "black",
                                    };
                                }}
                            >
                                <p>LOG IN </p>
                            </NavLink>


                    }
                    <NavLink
                        to="/registration"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? "red" : "black",
                            };
                        }}
                    >
                        <p> REGISTER</p>
                    </NavLink>



                </div>

            </div>

        </div>
    );
};

export default Header;