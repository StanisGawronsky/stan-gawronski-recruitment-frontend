import clsx from "clsx";
import styles from "./ListFallback.styles.module.scss";

interface Props {
  darkMode: boolean;
  fallbackText: string;
}

export const ListFallback = ({ darkMode, fallbackText }: Props) => {
  return (
    <div
      className={clsx(
        styles.fallbackList,
        darkMode && styles.fallbackListDarkMode
      )}
    >
      {fallbackText}
    </div>
  );
};
