import { useEffect, useState } from "react";

export const useCountdown = (finalDate: Date) => {
    let timer : NodeJS.Timeout ; 
  // Calculate the initial time remaining
  const calculateTimeRemaining = () => {
    const now = new Date();
    const timeRemaining = Number(finalDate) - Number(now);

    if (timeRemaining <= 0) {
      // Countdown has reached the final date, stop the timer
      clearInterval(timer);
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  // Declare a state variable for the countdown time
  const [countdown, setCountdown] = useState<CountDown>(
    calculateTimeRemaining()
  );

  // Use useEffect to set up a timer to update the countdown
  useEffect(() => {
    timer = setInterval(() => {
      setCountdown(calculateTimeRemaining());
    }, 1000); // Update the countdown every 1000 milliseconds (1 second)

    // Cleanup function to clear the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  return countdown;
};
