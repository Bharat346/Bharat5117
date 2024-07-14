// src/Footer.js
import React from 'react';
import './footer.css';
import { BrowserRouter as Router, Route, Routes, Link ,Navigate, BrowserRouter} from 'react-router-dom';
import { FaInstagram , FaGithub } from "react-icons/fa";
import { FaXTwitter , FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="cont">
                <div style={{fontSize:"18px" , marginBottom : "10px"}}>© 2024 <span style={{color:"rgba(155,95,255)"}}>Bharat Kumar</span>. All rights reserved.</div>
                <div className='social-footer-div'>
                    <a href="https://www.instagram.com/bharatchaudhary4913?igsh=NGNjcHJsNHFmaHY0" target="_blank" rel="noopener noreferrer"><FaInstagram className='social-media-icons'/></a>
                    <a href="https://x.com/BHARAT_346?t=vt3GZwndfz4bMtVRXI6NxA&s=09" target="_blank" rel="noopener noreferrer"><FaXTwitter className='social-media-icons'/></a>
                    <a href="https://www.linkedin.com/in/bharat-kumar-ab49b9297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin className='social-media-icons'/></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaGithub className='social-media-icons'/></a>
                </div><br />
            </div>
            <div className="footer-faq">
                    <div className="direct-links">
                        <p>Direct Links</p>
                        <Link className='footer-faq-direct-links-l' to="/projects">Projects</Link>
                        <Link className='footer-faq-direct-links-l' to="/notes">Notes</Link>
                        <Link className='footer-faq-direct-links-l' to="/blogs">blogs</Link>
                        <Link className='footer-faq-direct-links-l' to="/contact">Contact</Link>
                    </div>

                    <div className="footer-support">
                        <p>Skills</p>
                        <span>Html & CSS</span>
                        <span>JavaScript</span>
                        <span>C</span>
                        <span>Python</span>
                    </div>
                </div>
        </footer>
    );
}

export default Footer;
