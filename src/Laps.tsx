import React, { useEffect, useState } from 'react';

// Interface defining the props for the Laps component
interface LapsProps {
    laps: number[] | undefined;
}

// Functional component for displaying the recorded laps
const Laps: React.FC<LapsProps> = ({ laps }) => {
  // State to store calculated lap times
    const [lapTimes, setLapTimes] = useState<number[]>([]);

    // useEffect hook to recalculate lap times whenever laps prop changes
    useEffect(() => {
        if (laps && laps.length > 0) {
            // Calculate lap times by subtracting consecutive lap timestamps
            const newLapTimes = [laps[0]];
            for (let i = 1; i < laps.length; i++) {
                newLapTimes.push(laps[i] - laps[i - 1]);
            }
            setLapTimes(newLapTimes);
        }
    }, [laps]);

    // If no laps or laps array is empty, return null (don't render anything)
    if (!laps || laps.length === 0) {
        return null;
    }

    // Render the list of lap times
    return (
        <div className='lap-container'>
            <ul className='laps' style={{ listStyleType: 'none', padding: '0', textAlign: 'center' }}>
                {lapTimes.map((lap: number, index: number) => (
                    <li key={index} style = {{margin: '8px 0', textAlign: 'center'}}>Lap {index + 1}: {formatTimeDifference(lap)}</li>
                ))}
            </ul>
        </div>
    );
};

const formatTimeDifference = (timeDifference: number): string => {
    const date = new Date(timeDifference);
    return (
        formatTwoDigits(date.getUTCMinutes()) + ':' +
        formatTwoDigits(date.getUTCSeconds()) + '.' +
        formatThreeDigits(date.getUTCMilliseconds())
    );
};

const formatTwoDigits = (value: number): string => {
    return value < 10 ? `0${value}` : value.toString();
};

const formatThreeDigits = (value: number): string => {
    return value < 10 ? `00${value}` : value < 100 ? `0${value}` : value.toString();
};

export default Laps;
