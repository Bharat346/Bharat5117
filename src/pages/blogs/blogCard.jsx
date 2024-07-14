import React from "react";
import { useState , useEffect } from "react";
import "./section.css";
import { Link } from 'react-router-dom';

const BlogCard = ({title, txt , time , id}) => {
    return(
        <>
        <div className="blog-card">
            <h3>{title}</h3>
            <div className="blog-card-host">
            <div style={{display:"flex",justifyContent:"space-around" , alignItems : "center" , gap :"10px"}}>
            <div className="blog-card-img"><img src="./src/assets/img/me.jpg" width={30} height={30} style={{borderRadius:"100px"}}/><span>Bharat Kumar</span></div>
            <div className="last-update">{time}</div>
            </div><hr />
            <div className="blog-card-description">{txt}</div>
            <Link className="blog-button" to={`/blogs/${id + 1000}`}>Read More</Link>
            </div>
        </div>
        </>
    );
}

export default BlogCard;