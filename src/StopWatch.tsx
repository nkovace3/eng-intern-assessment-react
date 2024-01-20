import React from 'react'

const date = new Date();
const time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();


export default function StopWatch() {
    return(
        <div>
            <h1>{time}</h1>
        </div>
    )
}