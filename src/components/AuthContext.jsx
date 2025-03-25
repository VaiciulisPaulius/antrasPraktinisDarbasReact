import React, {createContext, useContext, useEffect, useState} from 'react'
import { digestMessage } from "../utils/crypto/hashing.js";
import {useJsonApi} from "./JsonApiContext.jsx";

const AuthContext = createContext(null);

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const {loading, error, request, paths} = useJsonApi()

    const [authError, setAuthError] = useState(null);

    const login = async userData => {
        if(!userData.username) {
            setAuthError("Missing username. Cant authenticate.")
            return;
        }
        if(!userData.password) {
            setAuthError("Missing password. Cant authenticate.")
            return;
        }
        const usersList = await request("GET", `/users?username=${userData.username}`);

        if(error) {
            setAuthError("API error: " + error)
            return;
        }

        const user = usersList.find(user => user.username === userData.username)

        if(!user) {
            setAuthError("No user of such username exists.")
            return;
        }

        const passwordHash = await digestMessage(userData.password)

        if(user.password !== passwordHash) {
            setAuthError("Incorrect password.")
            return;
        }

        localStorage.setItem("user", JSON.stringify(user));
        setUser(user)
        setAuthError(null)
    }

    useEffect(() => {
        if(localStorage.getItem("user")) {
            setUser(JSON.parse(localStorage.getItem("user")))
            console.log(JSON.parse(localStorage.getItem("user")))
        }
    }, []);

    const logout = () => {
        localStorage.removeItem("user")
    }

    const register = async userData => {
        if(!userData.username) {
            setAuthError("Missing username. Cant register.")
            return;
        }
        if(!userData.password) {
            setAuthError("Missing password. Cant register.")
            return;
        }

        let usersList;

        try {
            usersList = await request("GET", `/users?username=${userData.username}`);
        }
        catch(err) {
            setAuthError("API error: " + err)
            return;
        }

        const user = usersList.find(user => user.username === userData.username)

        if(user) {
            setAuthError("User already exists. Cant register")
            return;
        }

        const passwordHash = await digestMessage(userData.password)
        const data = {username: userData.username, password: passwordHash}

        try {
            const response = await request("POST", `/users`, data);
        }
        catch(err) {
            setAuthError("API error: " + err)
            return;
        }
        setAuthError(null)
    }

    useEffect(() => {
        console.log(authError)
    }, [authError])

    return (
        <AuthContext.Provider value={{user, login, logout, register, authError}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
