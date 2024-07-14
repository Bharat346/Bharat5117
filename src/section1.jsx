import React from "react";
import { useState , useEffect } from "react";
import "./components/css/section_1.css"
import Btn from "./btn.jsx";
// import TypeWriter from "./typewriter.jsx";

function Section_1(){
    return(
        <>
        <div className="section1">
            <div className="sec1">
            <div className="sec1-content">
                <h3>🌟Hii , Myself Bharat Kumar </h3>
                <h3>Web Developer</h3>
                {/* <TypeWriter/> */}
                {/* <TypeWriter/> */}
                <p>✨Currently Studying in National Institute of Technology Delhi. I am learning Javascript and i created projects using React-Js and Node-Js.✨</p>
                <a className="section1-resume-btn" href="./src/assets/img/resume.jpg" download={"Bharat Kumar Resume"}>Download Resume</a>
            </div>
            <img src="./src/assets/img/me.jpg" alt="Bharat Kumar" />
            </div>
        </div>
        </>
    )
}

export default Section_1;