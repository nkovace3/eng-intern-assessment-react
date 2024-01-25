import React, { useEffect, useState } from 'react'
import StopWatchButton from './StopWatchButton';
import StopWatch from './StopWatch';

export default function App() {
    const [isRunning, setIsRunning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [startTime, setStartTime] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if(isRunning && !isPaused){
            const calculatedStartTime = Date.now() - elapsedTime;
            setStartTime(calculatedStartTime);
            timer = setInterval(() => {
                setElapsedTime((prevElapsedTime) => Date.now() - calculatedStartTime);
            }, 1);
        } else {
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [isRunning, isPaused, elapsedTime]);

    const handleStart = () => {
        setIsRunning(true);
        setIsPaused(false);
    };

    const handleStop = () => {
        setIsRunning(false);
        setIsPaused(true);
    }

    return(
        <div>
            <StopWatch elapsedTime = {elapsedTime}/>
            <StopWatchButton
                onStart = {handleStart}
                onStop = {handleStop} />
        </div>
    )
}