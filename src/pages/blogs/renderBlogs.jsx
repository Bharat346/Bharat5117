import React from "react";
import blogCardData from "../../json/blogCardData";
import BlogCard from "./blogCard";
import Footer from "../../footer/footer";

const RenderBlog = () => {
    return(
        <>
        <h2 style={{color:"#000" , textAlign : "center" , transform:"translateY(100px)"}}>Blogs / Articles</h2>
        <div className="blog-cards">
        {blogCardData.map((item,index) => (
            <BlogCard
            key={index}
            title={item.title}
            txt={item.content}
            time={item.time}
            id={item.id}
            />
        ))}
        </div>
        <Footer/>
        </>
    );
}

export default RenderBlog;