import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Slider from '../Slider/Slider';

const Header = () => {
    return (
        <div>
            <div className='flex justify-between '>
            <div>
                <h1 className='font-bold text-yellow-500 text-3xl'>TONG GHOR</h1>
            </div>

            <div className='flex gap-5'>
                <Outlet></Outlet>
                {/* <NavLink to="/"><p>HOME</p></NavLink> */}

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

                        
                {/* <Link to="/login"><p>LOG IN </p></Link> */}
                {/* <Link to="/registration"><p> REGISTER</p></Link> */}
            </div>
            
            </div>
        <Slider></Slider>
        </div>
    );
};

export default Header;