import React from 'react'
import ButtonGroup from '@mui/material-next/ButtonGroup';
import Button from '@mui/material-next/Button';
import './css/Button.css';

export default function StopWatchButton() {
    return(
        <div  className = 'button-container'>
            <ButtonGroup
                color="tertiary"
                size="large"
                variant="elevated"
            >
            <Button style={{ backgroundColor: 'white', color: '#96bf48' }}>Start</Button>
            <Button style={{ backgroundColor: 'white', color: '#96bf48' }}>Stop</Button>
            <Button style={{ backgroundColor: 'white', color: '#96bf48' }}>Lap</Button>
            <Button style={{ backgroundColor: 'white', color: '#96bf48' }}>Reset</Button>
            </ButtonGroup>
        </div>
    )
}