import React from 'react'
import ButtonGroup from '@mui/material-next/ButtonGroup';
import Button from '@mui/material-next/Button';
import './css/Button.css';

interface StopWatchButtonProps {
    onStart: () => void;
    onStop: () => void;
    onReset: () => void;
    onLap: () => void;
}

export default function StopWatchButton({onStart, onStop, onReset, onLap}: StopWatchButtonProps) {
    return(
        <div  className = 'button-container'>
            <ButtonGroup
                color="tertiary"
                size="large"
                variant="elevated"
            >
            <Button style={{ backgroundColor: 'white', color: '#000000', fontFamily: 'Myriad Pro' }} onClick = {onStart}><strong>Start</strong></Button>
            <Button style={{ backgroundColor: 'white', color: '#000000', fontFamily: 'Myriad Pro' }} onClick = {onStop}><strong>Stop</strong></Button>
            <Button style={{ backgroundColor: 'white', color: '#000000', fontFamily: 'Myriad Pro' }} onClick = {onLap}><strong>Lap</strong></Button>
            <Button style={{ backgroundColor: 'white', color: '#000000', fontFamily: 'Myriad Pro' }} onClick = {onReset}><strong>Reset</strong></Button>
            </ButtonGroup>
        </div>
    )
}