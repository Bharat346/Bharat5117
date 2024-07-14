import React from "react";
import { useState , useEffect } from "react";
import CodeSection from "./codeSection";
import "./section.css"
import BlogTable from "./blogTable";

const Section = ({section,lang}) => {
    const renderContent = () => {
        switch(section.type){
            case "text" :
                return(
                    <>
                     <div className="blog-text"
                     dangerouslySetInnerHTML={{__html : section.content}}
                     />
                    </>
                );
            case "para":
                return <p className="blog-para">{section.p}</p>
            case "anchor":
                return <a href={section.href || "#"}>{section.a}</a>
            case "bold":
                return <b className="blog-bold">{section.b}</b>
            case "italic":
                return <i className="blog-italic">{section.i}</i>
            case "ul-list":
                return(
                    <>
                    <ul style={{padding:"0px 50px"}}>
                        {section.uli.map((item,index) => (
                                <li className="unordered-list">{item}</li>
                        ))}
                    </ul>
                    </>
                );
            case "ol-list" :
                return(
                    <>
                    <ol style={{padding:"0px 50px"}}>
                        {
                            section.oli.map((item,index) => (
                                <li className="ordered-list">{item}</li>
                            ))
                        }
                    </ol>
                    </>
                );
            case "heading" :
                return(
                    <>
                    {section.h1 && <h1>{section.h1}</h1>}
                    {section.h2 && <h2>{section.h2}</h2>}
                    {section.h3 && <h3>{section.h3}</h3>}
                    {section.h4 && <h4>{section.h4}</h4>}
                    {section.h5 && <h5>{section.h5}</h5>}
                    {section.h6 && <h6>{section.h6}</h6>}
                    </>
                );
            case "breaker":
                return <br/>
            case "line":
                return <hr/>
            case "image":
                return <img className="blog-img" src={section.src} alt={section.alt}/>
            case "code" :
                return <CodeSection code={section.code} lang={lang}/>
            case "video":
                return (<video className="blog-video" controls>
                    <source src="section.video" type="video/mp4" />
                </video>);
            case "table":
                return <BlogTable tableContent={section.tbody} />
            default:
                return null;
        }
    }
    console.log(renderContent().type);
    return (renderContent().type === "hr" | "br") ? renderContent() : <div className="blog-section">{renderContent()}</div>
};

export default Section;