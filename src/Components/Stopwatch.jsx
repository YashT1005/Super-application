import React, { useEffect, useState } from 'react'
import './Stopwatch.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import arrowUp from '../assets/arrowUp.png'
import arrowDown from '../assets/ArrowDown.png'
import Remain from '../utils/Remain'

function Stopwatch() {
    let [seconds, setSeconds] = useState("00");
    let [minutes, setMinutes] = useState("00");
    let [hours, setHours] = useState("00");
    var [duration, setDuration] = useState(0);
    const [showRemain, setShow] = useState(false);


    const handleclick = () => {
        let hour = parseInt(hours);
        let minute = parseInt(minutes);
        let second = parseInt(seconds);
        let p = (hour * 60 * 60) + (minute * 60) + second;
        console.log(hour);
        console.log(minute);
        console.log(second);
        setDuration(p);
        console.log(p);
        setIsPlaying(!isPlaying);
        setShow(true);
    }



    const increase = (e) => {
        if (e.target.id === "hours") {
            if (hours < 9) {
                console.log("smaller");
                setHours("0" + ++hours);
            }
            else {
                setHours(++hours);
            }
        }
        else if (e.target.id === "minutes") {
            if (minutes < 9) {
                setMinutes("0" + ++minutes)
            }
            else {
                setMinutes(++minutes)
            }
        }
        else if (e.target.id === "seconds") {
            if (seconds < 9) {
                setSeconds("0" + ++seconds)
            }
            else {
                setSeconds(++seconds)
            }
        }
    }
    const decrease = (e) => {

        if (e.target.id === "hours") {
            // console.log(e.target.id);
            if (hours > 0) {
                setHours(--hours);
            }
        }
        else if (e.target.id === "minutes") {
            // console.log(e.target.id);
            if (minutes > 0) {

                setMinutes(--minutes)
            }
        }
        else if (e.target.id === "seconds") {
            // console.log(e.target.id);
            if (seconds > 0) {

                setSeconds(--seconds)
            }
        }
    }



    const [isPlaying, setIsPlaying] = useState(false);
    const [start_stop, setStart_stop] = useState("START");



    return (
        <div className='stopwatch'>
            <div className="circle">
                <CountdownCircleTimer
                    isPlaying={isPlaying}
                    duration={duration}
                    colors={"red"}
                    size={140}
                    trailColor='#181D37'
                    strokeWidth={6}
                >
                    {
                        showRemain && (({ remainingTime }) => <div className='remaining-time'>{<Remain duration={duration} />}</div>)
                    }

                </CountdownCircleTimer>
            </div>
            <div className="flex-column">
                <div className="time-set">
                    <div className="set hours">
                        <p>Hours</p>
                        <img src={arrowUp} id='hours' onClick={increase} className='arrow' />
                        <h1>{hours}</h1>
                        <img src={arrowDown} id='hours' onClick={decrease} className='arrow' />
                    </div>
                    <p className='partition'> : </p>
                    <div className="set minutes">
                        <p>Minutes</p>
                        <img src={arrowUp} id='minutes' onClick={increase} className='arrow' />
                        <h1>{minutes}</h1>
                        <img src={arrowDown} id='minutes' onClick={decrease} className='arrow' />
                    </div>
                    <p className='partition'> : </p>
                    <div className="set seconds">
                        <p>Seconds</p>
                        <img src={arrowUp} id='seconds' onClick={increase} className='arrow' />
                        <h1>{seconds}</h1>
                        <img src={arrowDown} id='seconds' onClick={decrease} className='arrow' />
                    </div>
                </div>
                <button className='start-stop' onClick={handleclick}>{start_stop}</button>

            </div>
        </div >
    )
}

export default Stopwatch