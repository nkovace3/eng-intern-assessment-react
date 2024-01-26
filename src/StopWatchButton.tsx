import React from 'react'
import ButtonGroup from '@mui/material-next/ButtonGroup';
import Button from '@mui/material-next/Button';
import './css/Button.css';

interface StopWatchButtonProps {
    onStart: () => void;
    onStop: () => void;
    onReset: () => void;
}

export default function StopWatchButton({onStart, onStop, onReset}: StopWatchButtonProps) {
    return(
        <div  className = 'button-container'>
            <ButtonGroup
                color="tertiary"
                size="large"
                variant="elevated"
            >
            <Button style={{ backgroundColor: 'white', color: '#96bf48' }} onClick = {onStart}>Start</Button>
            <Button style={{ backgroundColor: 'white', color: '#96bf48' }} onClick = {onStop}>Stop</Button>
            <Button style={{ backgroundColor: 'white', color: '#96bf48' }}>Lap</Button>
            <Button style={{ backgroundColor: 'white', color: '#96bf48' }} onClick = {onReset}>Reset</Button>
            </ButtonGroup>
        </div>
    )
}