import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { IQuestion } from "../../types/types";
import styles from "./quizform.module.scss";
import TextareaAutosize from "react-textarea-autosize";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  changeSelectedVariants,
  changeTextAnswer,
  removeSelectedVariant,
} from "../../redux/slices/answersSlice";
import { MyButton } from "../UI/MyButton/MyButton";

interface QuizFormProps {
  question: IQuestion;
  nextQuestionClick: (
    e: React.MouseEvent<HTMLButtonElement>,
    inputType: string
  ) => void;
  setRestartClicked: Dispatch<SetStateAction<boolean>>;
}

export const QuizForm: FC<QuizFormProps> = ({
  question,
  nextQuestionClick,
  setRestartClicked,
}) => {
  const { variants, title, inputType } = question;
  const dispatch = useAppDispatch();
  const selectedVariants = useAppSelector((state) => state.selectedVariants);
  const textAnswer = useAppSelector((state) => state.textAnswer);

  useEffect(() => {
    if (variants?.length) {
      variants.forEach((variant, index) => {
        const checkbox = document.getElementById(
          `variant-${index}`
        ) as HTMLInputElement;
        if (selectedVariants[title]?.includes(variant)) {
          checkbox.checked = true;
        } else {
          checkbox.checked = false;
        }
      });
    }
  }, [selectedVariants, title, variants]);

  const handleChooseVariant = (
    e: React.ChangeEvent<HTMLInputElement>,
    variant: string
  ) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      dispatch(changeSelectedVariants({ title: title, variant: variant }));
    } else {
      dispatch(removeSelectedVariant({ title: title, variant: variant }));
    }
  };

  const handleInputChange = (newValue: string) => {
    dispatch(changeTextAnswer(newValue));
  };

  useEffect(() => {
    setRestartClicked(false);
  }, [setRestartClicked]);

  return (
    <form className={styles.form}>
      {variants ? (
        variants.map((variant, i) => (
          <div key={i} className={styles.variant}>
            <label>
              <input
                className={styles.checkbox}
                type={question.inputType}
                id={`variant-${i}`}
                value={variant}
                onChange={(e) => handleChooseVariant(e, variant)}
              />
              <span className={styles.checkstyle}></span>
              <p>{variant}</p>
            </label>
          </div>
        ))
      ) : (
        <TextareaAutosize
          className={styles.textarea}
          placeholder="Введите ответ"
          minRows={1}
          maxRows={50}
          value={textAnswer}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      )}
      <MyButton onClick={(e) => nextQuestionClick(e, inputType)}>
        Ответить
      </MyButton>
    </form>
  );
};
