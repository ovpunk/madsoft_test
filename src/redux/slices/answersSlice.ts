import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRootState, getInitialData, initialData } from "../initialState";
import { ICheckBoxAnswer, ITextAnswer } from "../../types/types";

const initialState: IRootState = getInitialData() || initialData;

export const answersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    addCheckBoxAnswer(state, action: PayloadAction<ICheckBoxAnswer>) {
      state.answers.push(action.payload);
    },
    addTextAnswer(state, action: PayloadAction<ITextAnswer>) {
      state.answers.push(action.payload);
    },
    incrementStep(state) {
      state.step = state.step + 1;
    },
    startStep(state) {
      state.step = 0;
    },
    resetAnswers(state) {
      state.answers = [];
      state.step = 0;
    },
    changeSelectedVariants(
      state,
      action: PayloadAction<{ title: string; variant: string }>
    ) {
      const { title, variant } = action.payload;
      state.selectedVariants = {
        ...state.selectedVariants,
        [title]: [...(state.selectedVariants[title] || []), variant],
      };
    },
    removeSelectedVariant(
      state,
      action: PayloadAction<{ title: string; variant: string }>
    ) {
      const { title, variant } = action.payload;
      state.selectedVariants = {
        ...state.selectedVariants,
        [title]: (state.selectedVariants[title] || []).filter(
          (item) => item !== variant
        ),
      };
    },
    clearSelectedVariants(state) {
      state.selectedVariants = {};
    },
    changeTextAnswer(state, action: PayloadAction<string>) {
      state.textAnswer = action.payload;
    },
    clearTextAnswer(state) {
      state.textAnswer = "";
    },
  },
});

export const {
  addCheckBoxAnswer,
  addTextAnswer,
  incrementStep,
  startStep,
  resetAnswers,
  changeSelectedVariants,
  removeSelectedVariant,
  clearSelectedVariants,
  changeTextAnswer,
  clearTextAnswer,
} = answersSlice.actions;
export const answerReducer = answersSlice.reducer;
