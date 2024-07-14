import React, { useState, useEffect } from "react";
import "./typewriter.css";

const TypeWriter = ({ speed = 100, textToType = "Web Developer" }) => {
  const [text, setText] = useState(""); // Text being typed
  const [index, setIndex] = useState(0); // Index of the current character being typed

  useEffect(() => {
    if (index < textToType.length) {
      const timer = setTimeout(() => {
        setText(prev => prev + textToType[index]);
        setIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer); // Cleanup the timeout
    }
  }, [index, speed, textToType]);

  return <div className="typewriter">{text}</div>;
};

export default TypeWriter;
