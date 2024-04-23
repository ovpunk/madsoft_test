import { IQuestion } from "../types/types";

export const questions: IQuestion[] = [
  {
    title: "Как вас зовут?",
    inputType: "textarea",
  },
  {
    title: "Чем свойства отличаются от состояний?",
    variants: [
      "Свойства для работы со значениями, состояния для работы с функциями",
      "Состояния для работы со значениями, свойства для работы с функциями",
      "Свойства можно изменять, состояния нельзя",
      "Состояния можно изменять, свойства нельзя",
    ],
    inputType: "checkbox",
  },
  {
    title: "Напишите все методы массивов JS, котоыре вы знаете.",
    inputType: "textarea",
  },
  {
    title: "Куда можно встроить готовый код из метода render()?",
    variants: [
      "Только в div",
      "В div или же в span",
      "Только в тег, у которого есть id",
      "В любой тег",
    ],
    inputType: "checkbox",
  },
  {
    title: "Какой метод отвечает за вывод информации через React JS компонент?",
    variants: ["print", "react", "console", "ReactDOM", "render"],
    inputType: "checkbox",
  },
  {
    title: "Как много компонентов может быть на сайте?",
    variants: [
      "Не более 10",
      "Не более 50",
      "Неограниченное количество",
      "Не более 300",
      "Не более 100",
    ],
    inputType: "checkbox",
  },
  {
    title: "Где правильно передена функция в качестве свойства?",
    variants: [
      "argument={someFunction}",
      "argument={this.someFunction {}}",
      "argument={this.someFunction}",
      "argument=(this.someFunction)",
      "argument={this.someFunction ()}",
    ],
    inputType: "checkbox",
  },
  {
    title:
      "Сколько родительских HTML тегов может быть выведено в React JS компоненте?",
    variants: [
      "Всегда 1",
      "Не более 5",
      "Неограниченное количество",
      "Не более 3",
      "Не более 10",
    ],
    inputType: "checkbox",
  },

  {
    title: "React JS – это...?",
    variants: [
      "JavaScript библиотека",
      "MVC-фреймворк",
      "фреймворк",
      "Back-end платформа",
    ],
    inputType: "checkbox",
  },
];
