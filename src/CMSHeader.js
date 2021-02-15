import React from "react";
import { NavLink } from "react-router-dom";

const CMSHeader = () =>{
    return(
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-info">
                    <h3 className="text-center mywhite">CMS</h3>

                    <button className="navbar-toggler" type="button"></button>
                    
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="nav justify-content-end">
                            <li className="nav-item active">
                                <h4>
                                    <NavLink to="/" className="nav-link mywhite">Home</NavLink>
                                </h4>
                            </li>
                            <li className="nav-item active">
                                <h4>
                                <NavLink to="/login" className="nav-link mywhite" exact> Login </NavLink>
                                </h4>
                                </li>
                                <li className="nav-item active">
                                <h4>
                                <NavLink to="/register" className="nav-link mywhite" exact> Register </NavLink>
                                </h4>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default CMSHeader;