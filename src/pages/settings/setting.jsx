import React from "react";
import { useState , useEffect } from "react";
import "./setting.css";
import { blogData } from "../../json/blogdata";

const Setting = () => {
  const [userTitle , setUserTitle] = useState("");  
  const [blogtype , setBlogType] = useState("");
  const [headingType , setHeadingType] = useState("");
  const [content , setContent] = useState("");
    const [editMode , setEditMode] = useState(true);
    const [jsondata , setJsondata] = useState(blogData);
    const [displayData , setDisplayData] = useState(false);

    const DisplayData = (e) => {
      if (e.target.value = "") {
        setDisplayData(false);
      }
      let a = blogData.filter(blog => blog.title === e.target.value)
      setDisplayData(true)
      console.log(a , displayData);
    }
  

    const handleEditMode = () => {
      setEditMode(!editMode);
    }

    const handleInputChange = (event) => {
      try{
        setJsondata(JSON.parse(event.target.value));
      }catch(err){
        console.log("ERROR : ",err);
      }
    }

    console.log(...blogData);

    return(
        <>
          <div className="addBlog">
            <h4>Edit Blogs</h4><hr />
            <button onClick={handleEditMode}>{editMode ? 'save' : 'Edit'}</button>
            <div className="edit-blog">
                <input type="text" placeholder="Enter Tittle of Blog" onChange={(e) => {DisplayData(e);e.preventDefault()}} />
                <div style={{width:"70%"}}>
                <select>
                  <option value="text">text</option>
                  <option value="para">para</option>
                  <option value="line">line</option>
                  <option value="heading">heading</option>
                  <option value="bold">bold</option>
                  <option value="ul-list">ul-list</option>
                  <option value="ol-list">ol-list</option>
                  <option value="image">image</option>
                  <option value="video">video</option>
                  <option value="code">code</option>
                  <option value="table">table</option>
                  <option value="breaker">breaker</option>
                </select>

                <select>
                  <option value="h3">h3</option>
                  <option value="h1">h1</option>
                  <option value="h2">h2</option>
                  <option value="h4">h4</option>
                  <option value="h5">h5</option>
                  <option value="h6">h6</option>
                </select>
                </div>

                <textarea placeholder="Enter Content"></textarea>
            </div>
            <div className="preview">
              
              {editMode ? (
                <textarea
                  style={{width:"97%",padding:"2.5%"}}
                  value={JSON.stringify(jsondata,null,2)}
                  rows={15}
                  onChange={(e) => handleInputChange(e)}
                  onKeyDown={(e) => {if (e.key === 'backspace') {
                    e.target.value = e.target.value.slice(0,-1)
                  }}}
                />
              ):(
                <pre>
                <code>
                {
                  JSON.stringify(jsondata,null,2)
                }
                </code>
                </pre>
              )}
            </div>
          </div>
        </>
    );
}

export default Setting;