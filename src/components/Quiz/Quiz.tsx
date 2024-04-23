import { FC, Fragment, useState } from "react";
import { IQuestion } from "../../types/types";
import styles from "./quiz.module.scss";
import { Lines } from "../Lines/Lines";
import { QuizForm } from "../QuizForm/QuizForm";
import { QuizResult } from "../QuizResult/QuizResult";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  addCheckBoxAnswer,
  addTextAnswer,
  clearSelectedVariants,
  clearTextAnswer,
  incrementStep,
  startStep,
} from "../../redux/slices/answersSlice";
import { Timer } from "../Timer/Timer";
import { MyButton } from "../UI/MyButton/MyButton";

interface QuizProps {
  question: IQuestion;
  count: number;
  step: number;
}

export const Quiz: FC<QuizProps> = ({ question, count, step }) => {
  const dispatch = useAppDispatch();
  const selectedVariants = useAppSelector((state) => state.selectedVariants);
  const textAnswer = useAppSelector((state) => state.textAnswer);
  const questionTitle = question?.title;
  const [showResult, setShowResult] = useState<boolean>(false);
  const [timeOver, setTimeOver] = useState<boolean>(false);
  const [restartClicked, setRestartClicked] = useState<boolean>(false);

  const nextQuestionClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    questionType: string
  ) => {
    e.preventDefault();
    if (questionType === "checkbox") {
      dispatch(addCheckBoxAnswer(selectedVariants));
      dispatch(clearSelectedVariants());
    }
    if (questionType === "textarea") {
      dispatch(addTextAnswer({ [questionTitle]: textAnswer }));
      dispatch(clearTextAnswer());
    }
    if (step !== count - 1) {
      dispatch(incrementStep());
    } else {
      setShowResult(true);
      localStorage.removeItem("timerTime");
    }
  };

  const handleStart = () => {
    setRestartClicked(false);
    setTimeOver(false);
    setShowResult(false);
    dispatch(startStep());
  };

  return (
    <div className={styles.quiz_wrapper}>
      {step === -1 ? (
        <div className={styles.start_btn__wrapper}>
          <MyButton onClick={() => handleStart()}>Старт</MyButton>
        </div>
      ) : showResult ? (
        <QuizResult
          setShowResult={setShowResult}
          timeOver={timeOver}
          setTimeOver={setTimeOver}
          setRestartClicked={setRestartClicked}
        />
      ) : (
        <div className={styles.quiz}>
          <div className={styles.top}>
            <h1>Тестирование</h1>
            <Timer
              setTimeOver={setTimeOver}
              setShowResult={setShowResult}
              restartClicked={restartClicked}
            />
          </div>
          <Lines count={count} step={step} />
          <p>{question?.title}</p>
          <Fragment key={step}>
            <QuizForm
              question={question}
              nextQuestionClick={nextQuestionClick}
              setRestartClicked={setRestartClicked}
            />
          </Fragment>
        </div>
      )}
    </div>
  );
};
