import { useState, useRef } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null); // Store interval ID

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1); // Count up
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div className="timer">
      <h2>Count Up Timer</h2>
      <h1>{seconds} sec</h1>
      <button onClick={startTimer} disabled={isRunning}>Start</button>
      <button onClick={stopTimer} disabled={!isRunning}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
