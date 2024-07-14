import React from "react";
import "./components/css/section_2.css";
import "./components/css/default.css"
import Progress_Bar from "./circular-Progress-bar/circularProgressBar.jsx";"./jsx-parts/circularProgressBar.jsx"
import CircularProgress from "./circular-Progress-bar/circular-P-Bar.jsx";"./jsx-parts/circularProgressBar.jsx"

function Section_2() 
{
    return(
        <>
        <div style={{width: "100%" , height:"60%"}}>
        <div className="section2">
            <h3>Skills</h3><hr />
            <div className="skills">
            <div className="progresses">
               <h4>Technical Skills</h4><hr />
               <Progress_Bar percent="70"/>
               <Progress_Bar txt = "Js" percent="80"/>
               <Progress_Bar txt = "Ts" percent="40"/>
               <Progress_Bar txt = "CSS" percent="60"/>
               <Progress_Bar txt = "Python" percent="40"/>
            </div>
            <div className="pskills">
               <h4>Professional Skills</h4><hr />
               <div className="p2skills">
               <CircularProgress percent="59"/>
               <CircularProgress txt="Creativity" percent="52"/>
               <CircularProgress txt="Communication" percent="65"/>
               </div>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Section_2;