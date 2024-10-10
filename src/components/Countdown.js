// src/components/Countdown.js
import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
    const targetDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000); // 24 hours from now

    const calculateTimeLeft = () => {
        const difference = targetDate - new Date();
        let timeLeft = {};

        if (difference > 0) {
            const totalSeconds = Math.floor(difference / 1000);
            const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;

            timeLeft = {
                hours: hours + (Math.floor(difference / (1000 * 60 * 60 * 24)) * 24),
                minutes: minutes,
                seconds: seconds,
            };
        } else {
            timeLeft = {
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="timer">
            <h1>Will Be Back In</h1>
            <div className="time">
                {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
            </div>
        </div>
    );
};

export default Countdown;
