import React from "react";
import { formatTime } from "./FormatTime";
import "./Stopwatch.style.css";

export function Stopwatch(props) {
  return (
    <div className="stopwatch">
      <div className="display">{formatTime(props.timer)}</div>
      <div className="container">
        {!props.isClicked && (
          <button onClick={props.onStart} className="startBtn">
            Start
          </button>
        )}
        {props.isClicked && (
          <button onClick={props.onStop} className="stopBtn">
            Stop
          </button>
        )}
        <button onClick={props.onLap} className="lapBtn">
          Lap
        </button>
        <button onClick={props.onReset} className="resetBtn">
          Reset
        </button>
        <button onClick={props.onClear} className="clearBtn">
          Clear
        </button>
      </div>
      <div className="lapDisplay">
        {props.times.map((time, index) => (
          <div key={index}>
            Lap {props.times.length - index}
            <div className="lapTime">{formatTime(time)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
