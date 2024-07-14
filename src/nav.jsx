import React, { useState } from "react";
import "./components/css/nav.css";
import { IoMenu } from "react-icons/io5";
import { GrProjects,GrNotes} from "react-icons/gr";
import { FaHome,FaCamera} from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { QRCode } from "react-qrcode-logo";
import { BrowserRouter as Router, Route, Routes, Link ,Navigate, BrowserRouter} from 'react-router-dom';
import "./components/css/nav.css";
import ShareButton from "./buttons/shareButton";

const NavBar = () => {
    // document.querySelector(".menu-link-2").style.display = "none";
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log("click");
        document.querySelector(".menu-link-2").classList.toggle(document.querySelector(".menu-link-2").classList.contains("openNav") ? "closeNav" : "openNav");
    };

    return (
        <>
        {/* style={{display:"none"}} */}
            <div className={`menu-link-2`}>
                <div className="close" onClick={toggleMenu}><MdClose style={{fontSize:"30px"}}/></div>
                <ul>
                    <li><Link to="/"><div className="menu-link2-li-div"><div><FaHome className="nav-menu-icons" /></div><abbr title="This is Home page">Home</abbr></div></Link></li>
                    <li><Link to="/projects"><div className="menu-link2-li-div"><div><GrProjects className="nav-menu-icons" /></div><abbr title="This is project page">Projects</abbr></div></Link></li>
                    <li><Link to="/notes"><div className="menu-link2-li-div"><div><GrNotes className="nav-menu-icons" /></div><abbr title="This is Notes page">Notes</abbr></div></Link></li>
                    <li><Link to="/blogs"><div className="menu-link2-li-div"><div><GrNotes className="nav-menu-icons" /></div><abbr title="This is Blog page">Blogs</abbr></div></Link></li>
                    <li><Link to="/contact"><div className="menu-link2-li-div"><div><IoMdContact className="nav-menu-icons" /></div><abbr title="This is contact page">contact</abbr></div></Link></li>
                </ul>
            </div>
            <nav className="main-nav">
                <div className="logo">
                <div>
                    {/* <img src=".\src\assets\img\logo.jpg" alt="" /> */}
                    <h2>
                        <span>B</span>harat 
                        <span> K</span>umar
                    </h2>
                </div>
                </div>
                <div className={`menu-link-1`}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/notes">Notes</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                
                <div className="menu" onClick={toggleMenu}>
                    {/* <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span> */}
                    <IoMenu/>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
