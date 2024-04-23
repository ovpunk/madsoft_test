import { FC, ReactNode } from "react";
import styles from "./mybutton.module.scss";

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export const MyButton: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};
