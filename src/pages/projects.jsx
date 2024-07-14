import React, { useEffect, useRef, useState } from "react";
import Card from "../card";
import projectData from "../json/projects";
import "./projects.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineMenuOpen } from "react-icons/md";
import Footer from "../footer/footer";

function Projects() {
    const [lang , setLang] = useState("all");
    const [isClick , setIsclick] = useState(false);

    const filteredProject = lang === "all" ? projectData : projectData.filter(project => project.lan === lang);
    return (
        <>
        <button className={`open-project-menu ${isClick === true ? "move-project-menu-icon" : ""}`} onClick={ () => isClick === false ? setIsclick(true) : setIsclick(false)}><MdOutlineMenuOpen/></button>
            <div className= {`project-menu ${isClick === true ? "project-menu-show" : ""}`}>
                <ul>
                    <div className="project-menu-items"><li onClick={ () => setLang("all")}>All</li></div>
                    <div className="project-menu-items"><li onClick={ () => setLang("JavaScript")}>JavaScript</li></div>
                    <div className="project-menu-items"><li onClick={ () => setLang("C")}>C</li></div>
                    <div className="project-menu-items"><li onClick={ () => setLang("Robotics")}>Robotics</li></div>
                </ul>
            </div>
            <div className="project-card-parent">
            <h2 style={{color:"#000" , textAlign : "center",fontWeight:'bold' , marginBottom:"20px"}}>Projects</h2>
            <div className= {`project-card`}>
                {
                   filteredProject.map((project , index) => (
                     <Card
                       imgSrc={project.img}
                       imgAlt={project.Tittle}
                       txt={project.Description}
                       name={project.Tittle}
                       link1={project.code}
                       link2={project.project_view}
                       tagArr={project.tags}
                     />
                   ))
                }
            </div>
            </div>
            <Footer/>
        </>
    );
}

export default Projects;
