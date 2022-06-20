import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-2">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-3" to="/" >COLLECTION</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            <NavLink to="/login" className="btn btn-outline-dark">
                                <i className="fa fa-sign-in me-2 "></i>Login</NavLink>
                            <NavLink to="/register" className="btn btn-outline-dark">
                                <i className="fa fa-user-plus me-2 "></i>Register</NavLink>
                            <NavLink to="cart" className="btn btn-outline-dark">
                                <i className="fa fa-shopping-cart me-2 "></i>Cart (0)</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;