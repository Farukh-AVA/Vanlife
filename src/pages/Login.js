import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { loginUser } from "../api"

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" }); 
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    
    const navigate  = useNavigate(); 
    const location = useLocation();
    const fromLocation = location.state?.fromLocation || "/host"; 
     
    function handleSubmit(e) {
         e.preventDefault();
        async function getUser(){
            setLoading(true);
            try{
                const data = await loginUser(loginFormData);  
                localStorage.setItem("loggedin", true) 
                setError(null);
                navigate(fromLocation, { replace: true })  
            }catch (err){
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        getUser();
    
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }


    return (
        <div className="login-container">
            {
                location.state?.message &&
                <h3 className="login-first">{location.state.message}</h3>
            }
            <h1>Sign in to your account</h1>
            <h3>Auth is in development. Please use log: b@b.com pass: p123.</h3>
            {
                error?.message &&
                <h3 className="login-first">{error.message}</h3>
            }
            
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button
                    disabled={loading === true}
                >
                    {loading === true 
                        ? "Logging in..."
                        : "Log in"

                    }</button>
            </form>
        </div>
    )

}