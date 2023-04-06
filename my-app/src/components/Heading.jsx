import React from "react";
 
import {Link, NavLink} from "react-router-dom"


function Heading(){
    return (
        <nav className="navbar navbar-default">

        <div className="container-fluid">

            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <NavLink className="navbar-brand" to="/">SkillBuilder
                </NavLink>
            </div>

            <div className="collapse navbar-collapse" id="myNavbar">

                <ul className="nav navbar-nav navbar-right">
                    <li className=" filter-btn"><NavLink to="/">Home</NavLink></li>
                    <li className="dropdown filter-btn">
                        <NavLink className="dropdown-toggle" data-toggle="dropdown" to="/offers">Offers<span class="caret"></span></NavLink>
                        <ul className="dropdown-menu">
                            <li><Link to="/notfound" target="_blank">MARKETING</Link></li>
                            <li><Link to="/notfound" target="_blank">DESIGN</Link></li>
                            <li><Link to="/notfound" target="_blank">BUSINESS</Link></li>
                            <li><Link to="/notfound" target="_blank">DEVELOPMENT</Link></li>
                            <li><Link to="/notfound" target="_blank">MUSIC</Link></li>
                            <li><Link to="/notfound" target="_blank">PHOTOGRAPHY</Link></li>
                            <li><Link to="/notfound" target="_blank">IT</Link></li>
                        </ul>
                    </li>
                    <li className="filter-btn"><Link to="/calander" target="_blank">Calendar</Link></li>
                    <li className="dropdown filter-btn">
                        <NavLink className="dropdown-toggle" data-toggle="dropdown" to="/events">Events<span class="caret"></span></NavLink>
                        <ul className="dropdown-menu">
                            <li><Link to="/notfound" target="_blank">JAVA JS EVENT</Link></li>
                            <li><Link to="/notfound" target="_blank">BUSINESS EVENT</Link></li>
                            <li><Link to="/notfound" target="_blank">DEVELOPMENT EVENT</Link></li>
                            <li><Link to="/notfound" target="_blank">PHOTOGRAPHY EVENT</Link></li>
                            <li><Link to="/notfound" target="_blank">MUSIC EVENT</Link></li>
                            <li><Link to="/notfound" target="_blank">SOFT-SKILLS EVENT</Link></li>
                        </ul>
                    </li>
                    <li className="filter-btn"><Link to="/careers">Careers</Link></li>
                    <li className="filter-btn"><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
        
    </nav>
    );
    
}

export default Heading;