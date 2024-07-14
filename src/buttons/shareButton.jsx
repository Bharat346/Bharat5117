import React from "react";
import { IoMdShare } from "react-icons/io"

const ShareButton = () => {
    const handleShareBtnClick = async () => {
        try{
            if (navigator.share) {
                await navigator.share({
                    url : window.location.href
                })
            }else{
                throw new Error("Web share API not Supported")
            }
        }catch(err){
            console.log("err" + err);
        }
    }

    return(
        <div>
            <button className="share-btn" onClick={handleShareBtnClick}><IoMdShare/></button>
        </div>
    )
}

export default ShareButton;