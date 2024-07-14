import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useEffect, useState } from "react";
import "./circularBar.css";

function CircularProgress({ txt = "Problem-solving", percent = "60" }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev < percent ? prev + 1 : percent));
    }, 15);

    return () => clearInterval(timer);
  }, [percent]);

  return (
    <div className="circular-progress-wrapper">
      <div>
      <CircularProgressbar
        className="cpbar"
        value={progress}
        text={`${progress}%`}
        maxValue={100}
        strokeWidth={4}
        styles={buildStyles({
          textSize: '16px',
          pathColor: '#0307fa',
          textColor: '#000',
          trailColor: '#d6d6d6',
          backgroundColor: '#f3f3f3',
          pathTransitionDuration: 0.5,
          path: {
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Shadow effect
          }
        })}
      />
      </div>
      <div style={{fontSize:"18px", letterSpacing:"0.08em",fontFamily:"serif",fontWeight:"640"}}>{txt}</div>
    </div>
  );
}

export default CircularProgress;
