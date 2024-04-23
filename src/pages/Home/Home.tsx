import { Quiz } from "../../components/Quiz/Quiz";
import { FC } from "react";
import { questions } from "../../data/questions";
import { useAppSelector } from "../../hooks/hooks";

export const Home: FC = () => {
  const step = useAppSelector((state) => state.step);

  const question = questions[step];
  const count = questions.length;

  return <Quiz question={question} count={count} step={step} />;
};
