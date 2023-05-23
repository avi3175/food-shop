import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='flex justify-between '>
            <div>
                <h1 className='font-bold text-yellow-500 text-3xl'>TONG GHOR</h1>
            </div>

            <div className='flex gap-5'>
               
                

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