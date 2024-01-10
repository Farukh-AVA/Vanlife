import React from "react"
import { Link, NavLink } from "react-router-dom"
import { CiLogin } from "react-icons/ci";

export default function Header(){

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink 
                    to="/about"
                    style={({isActive}) => isActive ? activeStyle : null }
                >
                About
                </NavLink>

                <NavLink 
                    to="/vans"
                    style={({isActive}) => isActive ? activeStyle : null }
                >
                Vans
                </NavLink>

                <NavLink 
                    to="/host"
                    style={({isActive}) => isActive ? activeStyle : null }
                >
                Host
                </NavLink>
                <Link to="login" className="login-link">
                    {<CiLogin  size={25} />}
                </Link>
                <button onClick={fakeLogOut}>X</button>
            </nav>
        </header>
  )
}