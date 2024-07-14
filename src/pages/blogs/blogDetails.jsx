import React from "react";
import Blog from "./blogs";
import { blogData } from "../../json/blogdata";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
    const { id } = useParams();
    console.log(id);

    // Find the blog post that matches the id
    const blogPost = blogData.find(blog => blog.id === parseInt(id) - 1000);

    return (
        <div>
            {blogPost ? (
                <Blog key={blogPost.id} blog={blogPost} />
            ) : (
                <div>Blog post not found!</div>
            )}
        </div>
    );
};

export default BlogDetail;
