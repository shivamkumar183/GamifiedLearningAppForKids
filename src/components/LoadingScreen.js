import React, { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 20));
      if (progress >= 100) clearInterval(interval);
    }, 500);
    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="loading-container">
      <img src="/assets\logo.png" alt="Play2Learn Logo" className="logo" />
      <h1>Loading Play2Learn...</h1>
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default LoadingScreen;
