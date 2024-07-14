import React, { useState, useEffect } from 'react';
import './components/css/card.css';
import TagCard from "./tags/tag";

const Card = ({ imgSrc, imgAlt, name, txt, link1, link2, id, tagArr = [], ...props }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [cardLeftPosition, setCardLeftPosition] = useState(0);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        setTags(tagArr.map(tag => ({ text: tag })));
        
        // Update card left position based on window width
        const handleResize = () => {
            const offset = 1; // Adjust offset as needed
            setCardLeftPosition(250 + (id - offset) * 500); // Example adjustment
        };

        handleResize(); // Initial call
        window.addEventListener('resize', handleResize); // Listen to window resize

        return () => window.removeEventListener('resize', handleResize); // Clean up listener
    }, [id, tagArr]);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="card"
            ref={props.ref}
            style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <div className={`content ${isHovered ? 'heightup' : ''}`}>
                <h1 className="card-title">{name}</h1>
                <TagCard tags={tags} />
                <hr />
                <i className="card-description">{txt}</i><br />
                <br />
                <div className="btns">
                    <a href={link1} target="_blank" rel="noopener noreferrer">
                        <button className='card-btn1'>code</button>
                    </a>
                    <a href={link2} target="_blank" rel="noopener noreferrer">
                        <button className='card-btn2'>view more</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;
