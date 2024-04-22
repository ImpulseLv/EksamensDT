import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../LoginAndRegister/AuthContext";

const Navbar = () => {
    const { isLoggedIn, handleLogout } = useAuth();

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/">Your Logo</Link>
                </div>
                <div className="navbar-buttons">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    {isLoggedIn && <Link to="/animals">Table with animals</Link>}
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="navbar-auth">
                    {isLoggedIn ? (
                        <Link to="/" onClick={handleLogout}>Logout</Link>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/registration">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;