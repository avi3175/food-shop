import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Registration = () => {
  const [error, setError] = useState('')
  const { createUser,handleGoogle,handleTheGit } = useContext(AuthContext)

  const handleSignUp = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    const confirm = form.confirm.value
    console.log(password, email, confirm)


    setError('')

    if (password !== confirm) {
      setError('YOUR PASSWORD DID NOT MATCHED')
      return
    }
    else if (password.length < 6) {
      setError('PASSWORD LENGTH MUST BE WITHIN 6 CHARECTER OR LONGER')
      return
    }

    createUser(email, password)
      .then(result => {
        const loggedUser = result.user
        console.log(loggedUser)
      })
      .catch(error => {
        console.log(error)
        setError(error.message)
      })

  }

// const handleGoogle = () =>{

// }
const handleG = () =>{
  handleGoogle()
  .then(result=>{
    const loggedUser = result.user
    console.log(loggedUser)
  })
  .catch(error=>{
    console.log(error)
  })
}

const handleGit = () =>{
  handleTheGit()
  .then(result=>{
    const loggedUser = result.user
    console.log(loggedUser)
  })
  .catch(error=>{
    console.log(error)
  })
}








  return (
    <div >

      <div className='flex justify-center items-center gap-5'>
        <div onClick={handleG} >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCA-4k6UxQ365CQa1Xo6vZsHWL0xCbiRegQg&usqp=CAU" alt="" className='w-16' />

        </div>
        <div onClick={handleGit} >
          <img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" alt="" className='w-16' />

        </div>
      </div>






      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up for an account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              sign in to your existing account
            </a>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">



            <form className="space-y-6" onSubmit={handleSignUp}>


             

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="confirm"
                    name="confirm"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <input type="submit" value="SIGN UP" />
              </div>
            </form>



          </div>
        </div>
      </div>


      <p>{error}</p>
    </div>
  );
};

export default Registration;