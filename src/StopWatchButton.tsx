import React from 'react'
import ButtonGroup from '@mui/material-next/ButtonGroup';
import Button from '@mui/material-next/Button';
import './css/Button.css';

// Interface defining the props for the StopWatchButton component
interface StopWatchButtonProps {
    onStart: () => void;
    onStop: () => void;
    onReset: () => void;
    onLap: () => void;
}

// Functional component for rendering buttons related to stopwatch controls
export default function StopWatchButton({onStart, onStop, onReset, onLap}: StopWatchButtonProps) {
    return(
        <div  className = 'button-container'>
            {/* ButtonGroup from Material-UI to group buttons */}
            <ButtonGroup
                color="tertiary"
                size="large"
                variant="elevated"
            >
            {/* Start button */}
            <Button style={{ backgroundColor: 'white', color: '#000000', fontFamily: 'Myriad Pro' }} onClick = {onStart}><strong>Start</strong></Button>
            {/* Stop button */}
            <Button style={{ backgroundColor: 'white', color: '#000000', fontFamily: 'Myriad Pro' }} onClick = {onStop}><strong>Stop</strong></Button>
            {/* Lap button */}
            <Button style={{ backgroundColor: 'white', color: '#000000', fontFamily: 'Myriad Pro' }} onClick = {onLap}><strong>Lap</strong></Button>
            {/* Reset button */}
            <Button style={{ backgroundColor: 'white', color: '#000000', fontFamily: 'Myriad Pro' }} onClick = {onReset}><strong>Reset</strong></Button>
            </ButtonGroup>
        </div>
    )
}