import React, { useState, useEffect } from "react";

const CopyBtn = ({ val }) => {
    const [copyText, setCopyText] = useState("Copy");

    const handleCopytoClipBoard = async () => {
        try {
            if (navigator.clipboard) {
                await navigator.clipboard.writeText(val);
                setCopyText("Copied!");
            }
        } catch (error) {
            console.error("Error copying text:", error);
        }
    };

    useEffect(() => {
        let timeout;
        if (copyText === "Copied!") {
            timeout = setTimeout(() => {
                setCopyText("Copy");
            }, 3000);
        }

        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [copyText]);

    return (
        <button className="copy-btn" onClick={handleCopytoClipBoard}>
            {copyText}
        </button>
    );
};

export default CopyBtn;