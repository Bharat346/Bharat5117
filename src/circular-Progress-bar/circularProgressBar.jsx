import React from "react";
import { useState , useEffect , useRef } from "react";
import "./circularBar.css"
// import ProgressBar from 'react-bootstrap/ProgressBar';

function Progress_Bar({txt = "HTML" , percent = "100"}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => (prev < percent ? prev + 1 : percent));
    }, 10);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="prog">
        <div className="progress-container">
          <div style={{color:"black" , fontFamily:"sans-serif"}}>{txt}  </div>
          <div style={{color:"black"}}> {progress + "%"}</div>
        </div>
        <progress className="styled-progress-bar" value={progress} max={100} />
      </div>
    </>
  );
}

export default Progress_Bar;