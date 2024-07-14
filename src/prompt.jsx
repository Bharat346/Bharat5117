import React from "react";

function Prmt() {
    const handleClick = () => {
        const userInput = window.prompt("please Enter Somethong : ");
        console.log(userInput);
    }

    return(
        <>
        <div>
            <button onClick={handleClick}>show prompt</button>
        </div>
        </>
    )
}

export default Prmt;