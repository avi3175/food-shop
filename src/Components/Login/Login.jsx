import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='mx-60'> 
          <div className='mx-60 mt-32'>
            <div class="w-full max-w-xs">

              <form class="bg-yellow-400 shadow-md rounded px-8 pt-6 pb-8 mb-4 ">

                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Username
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                </div>
                <div class="mb-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                  </label>
                  <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                  <p class="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div class="flex items-center justify-between">
                 <input type="submit" value="SIGN IN" className='px-4 py-2 bg-blue-700 text-center font-bold  text-white' />
                  <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                  </a>
                </div>

              </form>
              <p className='text-xl font-bold'>NEW TO THIS WEBSITE?</p>
              <Link to="/registration"><span className='text-blue-500 font-bold'>REGISTER</span></Link>
             
            </div>
        </div>
        </div>
    );
};

export default Login;