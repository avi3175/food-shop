import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email,password) =>{
       return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

useEffect(()=>{
   const unsubscribed = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
    })
    return ()=>{
        return unsubscribed()
    }
},[])


    const authinfo = { user, createUser,logIn,logOut }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;