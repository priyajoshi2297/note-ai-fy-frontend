import React, { useState, useRef, useEffect } from "react";

function Stopwatch({ triggerStart }) {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const intervalRef = useRef(null);

  const startStopwatch = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(updateStopwatch, 1000);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTime({ hours: 0, minutes: 0, seconds: 0 });
  };

  const updateStopwatch = () => {
    setTime((prevTime) => {
      let seconds = prevTime.seconds + 1;
      let minutes = prevTime.minutes;
      let hours = prevTime.hours;

      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }

      return { hours, minutes, seconds };
    });
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  useEffect(() => {
    if (triggerStart) {
      startStopwatch();
    } else {
      stopStopwatch();
      resetStopwatch();
    }
  }, [triggerStart]);

  return (
    <div>
      <p>
        {time.minutes > 0
          ? `${formatTime(time.minutes)}:${formatTime(time.seconds)} min`
          : `${formatTime(time.seconds)} sec`}
      </p>
    </div>
  );
}

export default Stopwatch;
