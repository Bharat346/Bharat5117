import React from "react";
import Section from "./section";
import BlogTable from "./blogTable";
import BlogCard from "./blogCard";

const Blog = ({blog}) => {
    return(
        <div className="blog">
            <div className="blog-header">
            <h2 style={{
              textAlign:"center",
              color:"#000",
              fontWeight :"bold",
            }}>{blog.title}</h2>
            <div className="blog-identity-img"><img src="../src/assets/img/me.jpg" width={40} height={40} style={{borderRadius:"100px"}}/><span>Bharat Kumar</span></div>
            <div className="last-update">05 July 2024</div>
            </div>
            {
                blog.sections.map((section , index) => (
                    <Section key={index} section={section} lang={blog.lang}/>
                ))
            }
        </div>
    )
}

export default Blog;