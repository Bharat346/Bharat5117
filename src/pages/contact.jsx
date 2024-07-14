import React from "react";
import { useState , useEffect } from "react";
import "./contact.css"
import { FaInstagram , FaGithub } from "react-icons/fa";
import { FaXTwitter , FaLinkedin } from "react-icons/fa6";

function Contact(){
    return(
        <>
         <div className="contact-page">
            <h3>Contact me</h3><hr />
            <div className="contact-page-img">
                <img src="../../src/assets/img/me.jpg" alt="" srcset="" />
            </div>
            <div className="contact-info">
                <b>Feel Free to Contact me</b>
                <p>Email : 231210034@nitdelhi.ac.in</p>
                <div className='social-contact-div'>
                    <a href="https://www.instagram.com/bharatchaudhary4913?igsh=NGNjcHJsNHFmaHY0" target="_blank" rel="noopener noreferrer"><FaInstagram className='social-media-icons'/></a>
                    <a href="https://x.com/BHARAT_346?t=vt3GZwndfz4bMtVRXI6NxA&s=09" target="_blank" rel="noopener noreferrer"><FaXTwitter className='social-media-icons'/></a>
                    <a href="https://www.linkedin.com/in/bharat-kumar-ab49b9297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin className='social-media-icons'/></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaGithub className='social-media-icons'/></a>
                </div>
            </div>
         </div>
        </>
    );
}

export default Contact;