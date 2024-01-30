import React, { useEffect, useState } from 'react';
import StopWatchButton from './StopWatchButton';
import StopWatch from './StopWatch';
import Laps from './Laps';

export default function App() {
    const [isRunning, setIsRunning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [startTime, setStartTime] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [laps, setLaps] = useState<number[]>([]);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isRunning && !isPaused) {
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
    };

    const handleReset = () => {
        setIsRunning(false);
        setElapsedTime(0);
        setLaps([]);
    };

    const handleLap = () => {
        if(isRunning){
            const lapTime = laps.length === 0 ? elapsedTime : Date.now() - startTime;
            setLaps((prevLaps) => [...prevLaps, lapTime]);
        }
    };

    return (
        <div className='main-container'>
            <h1 className='header' style={{ marginBottom: '0px' }}>Shopify Technical Challenge</h1>
            <p><strong>By Nikola Kovacevic</strong></p>
            <StopWatch elapsedTime={elapsedTime} />
            <StopWatchButton
                onStart={handleStart}
                onStop={handleStop}
                onReset={handleReset}
                onLap={handleLap} />
            <Laps laps={laps} />
        </div>
    );
}
