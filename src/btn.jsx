import React from "react";

function Btn({val , clr , wid}) {
    return(
        <>
        <button className="calc-btn" style={{'--bgColor' : clr,'--wid' : wid}}>{val}</button>
        </>
    )
}

export default Btn;