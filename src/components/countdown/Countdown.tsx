import { useEffect, useState } from "react";
import styles from './../../styles/Countdown.module.css';
import cronometro from './../../assets/cronometro.png';

const Countdown = () => {
  const launchDate = new Date('09/25/2023 00:00:00');
  const now = new Date();
  const timeDifference = launchDate.getTime() - now.getTime();

  const [time, setTime] = useState({
    days: Math.max(Math.floor(timeDifference / (1000 * 60 * 60 * 24)), 0),
    hours: Math.max(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 0),
    minutes: Math.max(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)), 0),
    seconds: Math.max(Math.floor((timeDifference % (1000 * 60)) / 1000), 0),
  });

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime.days === 0 && prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(countdownInterval);
          return prevTime;
        } else {
          const newSeconds = prevTime.seconds === 0 ? 59 : prevTime.seconds - 1;
          const newMinutes = prevTime.seconds === 0 ? (prevTime.minutes === 0 ? 59 : prevTime.minutes - 1) : prevTime.minutes;
          const newHours = prevTime.minutes === 0 && prevTime.seconds === 0 ? (prevTime.hours === 0 ? 23 : prevTime.hours - 1) : prevTime.hours;
          const newDays = prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0 ? prevTime.days - 1 : prevTime.days;
          return {
            days: newDays,
            hours: newHours,
            minutes: newMinutes,
            seconds: newSeconds,
          };
        }
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const formatTimeUnit = (unit: number) => {
    return unit < 10 ? `0${unit}` : unit;
  };

  return (
    <div className={styles.countdown_timer}>
      <img src={cronometro} alt="cronometro" loading="lazy"/>
      <h1>Próximamente en:</h1>
      <div className={styles.timer}>
        <div className={styles.time}>
          <span className={styles.value}>{formatTimeUnit(time.days)}</span>
          <span className={styles.label}>Días</span>
        </div>
        <div className={styles.time}>
          <span className={styles.value}>{formatTimeUnit(time.hours)}</span>
          <span className={styles.label}>Horas</span>
        </div>
        <div className={styles.time}>
          <span className={styles.value}>{formatTimeUnit(time.minutes)}</span>
          <span className={styles.label}>Minutos</span>
        </div>
        <div className={styles.time}>
          <span className={styles.value}>{formatTimeUnit(time.seconds)}</span>
          <span className={styles.label}>Segundos</span>
        </div>
      </div>
    </div>
  );
}

export default Countdown