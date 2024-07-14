import React from "react";
import "./components/css/card2.css"
import { IoMenu } from "react-icons/io5";
import TagCard from "./tags/tag";
import { useState , useEffect } from "react";

function Bcard({title , content , href , src , tagArr = []}){
    const [tags, setTags] = useState([]);
    useEffect(() => {
        setTags(tagArr.map(tag => ({ text: tag })));
    }, [tagArr]);
    return(
        <>
        <div className="container">
            <div className="bcard">
                <div className="box">
                    <div className="icon">
                        <div className="iconbox" style={{backgroundImage : `url(${src})`}}></div>
                    </div>
                    
                    <div className="b-content">
                        <h3>{title}</h3>
                        <TagCard tags={tags} /><br />
                        <p>{content}</p>
                        <a href={href} target="__blank">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Bcard;