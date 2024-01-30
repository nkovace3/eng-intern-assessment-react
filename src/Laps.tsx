import React, { useEffect, useState } from 'react';

interface LapsProps {
    laps: number[] | undefined;
}

const Laps: React.FC<LapsProps> = ({ laps }) => {
    const [lapTimes, setLapTimes] = useState<number[]>([]);

    useEffect(() => {
        if (laps && laps.length > 0) {
            // Calculate lap times
            const newLapTimes = [laps[0]];
            for (let i = 1; i < laps.length; i++) {
                newLapTimes.push(laps[i] - laps[i - 1]);
            }
            setLapTimes(newLapTimes);
        }
    }, [laps]);

    if (!laps || laps.length === 0) {
        return null;
    }

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
