import React,{useState} from "react";

const ReadMoreless = ({text , maxlength = 100}) => {
    const [isRead , Setisread] = useState(false);

    const toggleRead = () => {
        Setisread(!isRead);
    }

    const displayText = isRead ? text : text.slice(0,maxlength);

    return(
        <>
        <div className="read-content">
            <span style={{transition:"1s"}}>{displayText}{isRead && text.length > maxlength ? " " : "........."}</span>
            {text.length > maxlength && (
                <span style={{backgroundColor : "violet",borderRadius : "5px",padding : "2px"}} onClick={toggleRead}>
                    {isRead ? "Read Less" : "Read More"}
                </span>
            )}
        </div><br />
        </>
    )
}

export default ReadMoreless;