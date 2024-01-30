import React, { useEffect, useState } from 'react';
import StopWatchButton from './StopWatchButton';
import StopWatch from './StopWatch';
import Laps from './Laps';

// Parent component for the stopwatch application
export default function App() {
    // State variables to manage the stopwatch functionality
    const [isRunning, setIsRunning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [startTime, setStartTime] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [laps, setLaps] = useState<number[]>([]);

    // useEffect hook to handle the timer logic and update the elapsed time
    useEffect(() => {
        let timer: NodeJS.Timeout;
        // If the stopwatch is running and not paused, start the timer
        if (isRunning && !isPaused) {
            const calculatedStartTime = Date.now() - elapsedTime;
            setStartTime(calculatedStartTime);
            timer = setInterval(() => {
                setElapsedTime((prevElapsedTime) => Date.now() - calculatedStartTime);
            }, 1);
        } else {
            // If the stopwatch is not running or paused, clear the timer
            clearInterval(timer);
        }

        // Cleanup function to clear the interval when the component unmounts or dependencies change
        return () => clearInterval(timer);
    }, [isRunning, isPaused, elapsedTime]);

    // Event handler to start the stopwatch
    const handleStart = () => {
        setIsRunning(true);
        setIsPaused(false);
    };

    // Event handler to stop the stopwatch
    const handleStop = () => {
        setIsRunning(false);
        setIsPaused(true);
    };

    // Event handler to reset the stopwatch
    const handleReset = () => {
        setIsRunning(false);
        setElapsedTime(0);
        setLaps([]);
    };

    // Event handler to record a lap
    const handleLap = () => {
        // Record lap time only if the stopwatch is running
        if(isRunning){
            const lapTime = laps.length === 0 ? elapsedTime : Date.now() - startTime;
            setLaps((prevLaps) => [...prevLaps, lapTime]);
        }
    };

    // Render the stopwatch application with components
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
