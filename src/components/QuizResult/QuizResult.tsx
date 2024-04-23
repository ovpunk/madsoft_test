import { FC, Dispatch, SetStateAction } from "react";
import styles from "./quizresult.module.scss";
import { useAppDispatch } from "../../hooks/hooks";
import { resetAnswers } from "../../redux/slices/answersSlice";

interface QuizResultProps {
  setShowResult: Dispatch<SetStateAction<boolean>>;
  setRestartClicked: Dispatch<SetStateAction<boolean>>;
  timeOver: boolean;
  setTimeOver: Dispatch<SetStateAction<boolean>>;
}

export const QuizResult: FC<QuizResultProps> = ({
  setShowResult,
  timeOver,
  setTimeOver,
  setRestartClicked,
}) => {
  const dispatch = useAppDispatch();

  const handleReset = () => {
    localStorage.removeItem("timerTime");
    dispatch(resetAnswers());
    setShowResult(false);
    setTimeOver(false);
    setRestartClicked(true);
  };

  return (
    <div className={styles.result}>
      {timeOver ? (
        <>
          <h2>Время вышло. Результаты сохранены.</h2>
          <button onClick={handleReset}>Повторить</button>
        </>
      ) : (
        <>
          <h2>Результаты тестирования сохранены</h2>
          <button onClick={handleReset}>Повторить</button>
        </>
      )}
    </div>
  );
};
