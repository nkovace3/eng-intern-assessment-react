import React, { useEffect, useState } from 'react';
import './css/Time.css';

// Interface defining the props for the StopWatch component
interface StopWatchProps {
  elapsedTime: number;
}

// Functional component for displaying the elapsed time in a stopwatch format
export default function StopWatch({elapsedTime}: StopWatchProps) {
  // State variable to store the formatted time string
  const [formattedTime, setFormattedTime] = useState('00:00:00.000');

  // useEffect hook to update the formatted time string every millisecond
  useEffect(() => {
    // Set up an interval to update the formatted time
    const timer = setInterval(() => {
      // Create a new Date object using the elapsed time
      const date = new Date(elapsedTime);
      // Format the time as HH:MM:SS.SSS and update the state
      setFormattedTime(
          date.getUTCHours() + ':' +
          (date.getUTCMinutes() < 10 ? '0' : '') + date.getUTCMinutes() + ':' +
          (date.getUTCSeconds() < 10 ? '0' : '') + date.getUTCSeconds() + '.' +
          (date.getUTCMilliseconds() < 10 ? '00' : date.getUTCMilliseconds() < 100 ? '0' : '') + date.getUTCMilliseconds()
        );
    }, 1);

    // Cleanup function to clear the interval when the component unmounts or dependencies change
    return () => clearInterval(timer);
  }, [elapsedTime]);

  // Render the stopwatch component with the formatted time
  return (
    <div className = 'time-container'>
      <h1>{formattedTime}</h1>
    </div>
  );
}
