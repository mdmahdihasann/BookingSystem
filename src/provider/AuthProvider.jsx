"use client"
import { AuthContext } from "@/context";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storageAuth = sessionStorage.getItem("authUser");
        if (storageAuth) setAuth(JSON.parse(storageAuth));
        setLoading(false)
    }, [])

    useEffect(() => {
        if (auth !== null) {
            if (auth) {
                sessionStorage.setItem("authUser", JSON.stringify(auth))
            } else {
                sessionStorage.removeItem("authUser")
            }
        }
    }, [auth])

    return (
        <AuthContext.Provider value={{ auth, setAuth, loading, setLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;