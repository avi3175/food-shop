import React, { createContext, useState } from 'react';
import app from '../../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)

   const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
   }


   const authinfo={user,createUser}
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;