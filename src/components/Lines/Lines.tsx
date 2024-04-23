import { FC } from "react";
import styles from "./lines.module.scss";
interface LinesProps {
  count: number;
  step: number;
}

export const Lines: FC<LinesProps> = ({ count, step }) => {
  const lines = Array.from({ length: count }, (_, index) => (
    <div
      key={index}
      className={
        step === index
          ? styles.active
          : step > index
          ? styles.complete
          : styles.line
      }
    ></div>
  ));

  return <div className={styles.progress}>{lines}</div>;
};
