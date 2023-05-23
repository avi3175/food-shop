import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div >

      <div className='flex justify-center items-center gap-5'>
        <div >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCA-4k6UxQ365CQa1Xo6vZsHWL0xCbiRegQg&usqp=CAU" alt="" className='w-16' />
         
        </div>
        <div >
          <img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" alt="" className='w-16' />
        
        </div>
      </div>






      <div className='mx-60'>

        <div className='mx-60 mt-12'>
          <div class="w-full max-w-xs">



            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Username
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" name='name' />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Email
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email" name='email'/>
              </div>


              <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                  Password
                </label>
                <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" name='password' />
                <p class="text-red-500 text-xs italic">Please choose a password.</p>
              </div>


              <div class="flex items-center justify-between">
                <input type="submit" value="REGISTER" className='px-4 py-2 bg-blue-700 text-center font-bold  text-white' />
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                  Forgot Password?
                </a>
              </div>


            </form>



            <p className='text-xl font-bold'>ALREADY SIGN IN?</p>
            <Link to="/login"><span className='text-blue-500 font-bold'>REGISTER</span></Link>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Registration;