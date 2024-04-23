import { ICheckBoxAnswer, ITextAnswer } from "./../types/types";

export const REDUX = "redux_superStore";

export interface IRootState {
  answers: (ICheckBoxAnswer | ITextAnswer)[];
  step: number;
  selectedVariants: ICheckBoxAnswer;
  textAnswer: string;
}

export const initialData: IRootState = {
  answers: [],
  step: -1,
  selectedVariants: {},
  textAnswer: "",
};

export const getInitialData = () => {
  const data = localStorage.getItem(REDUX);
  return data ? JSON.parse(data) : initialData;
};
