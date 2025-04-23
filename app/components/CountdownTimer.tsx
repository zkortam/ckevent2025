import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const eventDate = new Date('2025-05-01T12:00:00-07:00'); // May 1st, 2025, 12:00 PM PST

    const calculateTimeLeft = () => {
      const difference = +eventDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center bg-gray-800/50 px-4 py-3 rounded-lg">
      <span className="text-2xl md:text-3xl font-bold text-white">{value.toString().padStart(2, '0')}</span>
      <span className="text-sm text-gray-400">{label}</span>
    </div>
  );

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h3 className="text-center text-xl text-gray-300 mb-4">Event Starts In:</h3>
      <div className="flex justify-center space-x-4">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
} 