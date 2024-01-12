import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function AuthRequired(){
    
     
    const isLoggedIn = localStorage.getItem("loggedin");
    const location = useLocation(); 
    console.log(location); 
    if(!isLoggedIn){
        return ( 
            <Navigate 
                to="/login" 
                state={{
                        message: "Auth is in development. Please use log: b@b.com pass: p123.",
                        fromLocation: location.pathname                  
                    }}
                replace
            />
        )    
    }

    return <Outlet/>  
}