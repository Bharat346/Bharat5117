import React from "react";
import { useState , useEffect } from "react";
import Bcard from "../../card2";
import "./notes.css";
import NotesData from "./Notesdata.json"
import Footer from "../../footer/footer";

function Notes(){
    return(
        <>
        <div className="Notes-Section">
        <h3 style={{transform:"translateY(100px)",textAlign:"center",fontWeight:"bold"}}>Notes</h3>
        
        <div className="notes-page">
         {NotesData.map((notes,index) => (
            <Bcard
             key={index}
             title={notes.title}
             content={notes.content}
             href={notes.href}
             src={notes.src}
             tagArr={notes.tags}
            />
         ))}
        </div>
        </div>
        </>
    );
}

export default Notes;