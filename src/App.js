import React, { useState, useRef } from "react";
import { Stopwatch } from "./Stopwatch/StopwatchFunction";

function App() {
  const [timer, setTimer] = useState(0);
  const [times, setTimes] = useState([]);
  const timerInterval = useRef();
  const [isClicked, setIsClicked] = useState(false);
  const [isLapClicked, setIsLapClicked] = useState(false);
  const [lastInterval, setLastInterval] = useState(0);

  const onStart = () => {
    if (timerInterval.current) return;
    timerInterval.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 10);
    setIsClicked(true);
    setIsLapClicked(false);
  };

  const onStop = () => {
    if (timerInterval.current) {
      clearInterval(timerInterval.current);
      timerInterval.current = null;
      setIsClicked(false);
    }
  };

  const onReset = () => {
    setTimer(0);
    clearInterval(timerInterval.current);
    onStop();
  };

  const setLap = () => {
    const lapTime = lastInterval ? timer - lastInterval : timer;
    times.unshift(lapTime);
    setTimes([...times]);
    setLastInterval(timer);
  };

  const onLap = () => {
    if (timer === 0) return;
    if (!isClicked && !isLapClicked) {
      setLap();
      setIsLapClicked(true);
    } else if (isClicked) {
      setLap();
    }
  };

  const onClear = () => {
    setTimes([]);
    setTimer(0);
    setLastInterval(0);
    onStop();
  };

  return (
    <Stopwatch
      onStart={onStart}
      onStop={onStop}
      onLap={onLap}
      onReset={onReset}
      onClear={onClear}
      timer={timer}
      times={times}
      isClicked={isClicked}
    />
  );
}

export default App;
