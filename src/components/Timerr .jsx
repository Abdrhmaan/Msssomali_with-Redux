import React, { useState, useEffect } from 'react';

const Timerr = () => {
  const targetDate = new Date('2024-02-10T00:00:00');
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      // Timer expired
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-center mt-8">
      <h2 className="text-4xl font-bold mb-4">Countdown Timer</h2>
      <div className="flex justify-center">
        <div className="bg-gray-200 p-4 rounded-md mx-2">
          <div className="text-2xl font-bold">{timeRemaining.days}</div>
          <div className="text-sm">Days</div>
        </div>
        <div className="bg-gray-200 p-4 rounded-md mx-2">
          <div className="text-2xl font-bold">{timeRemaining.hours}</div>
          <div className="text-sm">Hours</div>
        </div>
        <div className="bg-gray-200 p-4 rounded-md mx-2">
          <div className="text-2xl font-bold">{timeRemaining.minutes}</div>
          <div className="text-sm">Minutes</div>
        </div>
        <div className="bg-gray-200 p-4 rounded-md mx-2">
          <div className="text-2xl font-bold">{timeRemaining.seconds}</div>
          <div className="text-sm">Seconds</div>
        </div>
      </div>
    </div>
  );
};


export default Timerr 