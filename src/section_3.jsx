import React, { useEffect } from "react";
import "./components/css/section_3.css";
import projectData from "./json/projects";
import Card from "./card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Section_3() {
    const lastProjectData = projectData.slice(-4);

    // Function to handle scrolling
    const scroll = (direction) => {
        const container = document.querySelector(".section3-slider-content");
        const scrollAmount = 300;
        if (direction === "left") {
            container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else if (direction === "right") {
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const backBtn = document.querySelector(".section3-arrow-back");
        const nextBtn = document.querySelector(".section3-arrow-next");

        const scrollLeft = () => scroll("left");
        const scrollRight = () => scroll("right");

        // Adding event listeners
        backBtn.addEventListener("click", scrollLeft);
        nextBtn.addEventListener("click", scrollRight);

        // Clean up function to remove event listeners
        return () => {
            backBtn.removeEventListener("click", scrollLeft);
            nextBtn.removeEventListener("click", scrollRight);
        };
    }, []); // Ensure this only runs once when the component mounts

    return (
        <div className="section3">
            <h4 style={{ textAlign: "center", color: "#000", fontWeight: "bold" }}>
                Last added projects
            </h4>
            <hr style={{ color: "#000" }} />
            <div className="section3-slider">
                <button 
                    className="section3-navigate-btn section3-arrow-back"
                >
                    <IoIosArrowBack />
                </button>
                <div className="section3-slider-content">
                    {lastProjectData.map((item, index) => (
                        <Card
                            key={index}
                            imgSrc={item.img}
                            imgAlt={item.Tittle}
                            name={item.Tittle}
                            txt={item.Description}
                            link1={item.code}
                            link2={item.project_view}
                            tagArr={item.tags}
                        />
                    ))}
                </div>
                <button 
                    className="section3-navigate-btn section3-arrow-next"
                >
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    );
}

export default Section_3;
