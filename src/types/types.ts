export interface IQuestion {
  title: string;
  variants?: string[];
  inputType: string;
}

export interface ICheckBoxAnswer {
  [key: string]: string[];
}

export interface ITextAnswer {
  [key: string]: string;
}
