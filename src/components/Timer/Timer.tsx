import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import styles from "./timer.module.scss";

interface TimerProps {
  setTimeOver: Dispatch<SetStateAction<boolean>>;
  setShowResult: Dispatch<SetStateAction<boolean>>;
  restartClicked: boolean;
}

export const Timer: FC<TimerProps> = ({
  setTimeOver,
  setShowResult,
  restartClicked,
}) => {
  const TIME = 300;

  const [time, setTime] = useState<number>(() => {
    const storedTime = localStorage.getItem("timerTime");
    return storedTime ? parseInt(storedTime, 10) : TIME;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          const newTime = prevTime - 1;
          localStorage.setItem("timerTime", String(newTime));
          return newTime;
        } else {
          return 0;
        }
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, [setTime, time]);

  useEffect(() => {
    if (time === 0 && !restartClicked) {
      setTimeOver(true);
      setShowResult(true);
    }
  }, [setTimeOver, time, setShowResult, restartClicked]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return <div className={styles.timer}>{formatTime(time)}</div>;
};
