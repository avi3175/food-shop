import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// import Header from '../Header/Header';

const Home = () => {
   const data = useLoaderData()
   console.log(data)


const handleChefs = (got) =>{
        console.log(got)
        localStorage.setItem("chefdata",JSON.stringify(got))
}

    return (
        <div className='bg-orange-100'>


        <div className='flex justify-between'>
            <div>
                <h1 className='font-bold text-yellow-400 text-3xl'>TONG GHOR</h1>
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



           
            <div className='grid grid-cols-3 mt-32 gap-7 mx-0'>
           
            
            {
                data.map(cooker=>
                    
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className='h-48'>
                        <img className="w-full h-full" src={cooker.profile_picture} alt="Sunset in the mountains"/>

                    </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{cooker.cook_name}</div>
                  <p className="text-gray-700 text-base font-bold">
                    EXPERIENCE:{cooker.years_of_experience}
                  </p>
                  <p className="text-gray-700 text-base font-bold">
                    NUMBER OF RECIPIES:{cooker.recipes}
                  </p>
                  <p className="text-gray-700 text-base font-bold">
                    LIKES:{cooker.likes}
                  </p>
                 <Link to="/chefs">
                  <button className='px-2 py-4 bg-yellow-500 rounded-sm' onClick={()=>{handleChefs(cooker)}} >
                    <p className='text-black font-bold text-xl '>VIEW RECIPIES</p>
                  </button>
                  </Link>
                </div>

               
              </div>)
            }
            
        </div>
        </div>
    );
};

export default Home;