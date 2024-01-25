import React, { useEffect, useState } from 'react';
import './css/Time.css';

interface StopWatchProps {
  elapsedTime: number;
}

export default function StopWatch({elapsedTime}: StopWatchProps) {
  const [formattedTime, setFormattedTime] = useState('00:00:00.000');

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date(elapsedTime);
      setFormattedTime(
          date.getUTCHours() + ':' +
          (date.getUTCMinutes() < 10 ? '0' : '') + date.getUTCMinutes() + ':' +
          (date.getUTCSeconds() < 10 ? '0' : '') + date.getUTCSeconds() + '.' +
          (date.getUTCMilliseconds() < 10 ? '00' : date.getUTCMilliseconds() < 100 ? '0' : '') + date.getUTCMilliseconds()
        );
    }, 1);

    return () => clearInterval(timer);
  }, [elapsedTime]);

  return (
    <div className = 'time-container'>
      <h1>{formattedTime}</h1>
    </div>
  );
}
