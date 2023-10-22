import { useState } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

interface ToggleSwitchProps {
  callback: () => void;
  className?: string;
}

export const ToggleSwitch = ({ callback, className }: ToggleSwitchProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    callback();
  };

  return (
    <div className={clsx(styles.toggleSwitchContainer, className)}>
      <span>Dark Mode</span>
      <label className={styles.toggleSwitch}>
        <input
          type="checkbox"
          className={styles.toggleSwitchInput}
          checked={isChecked}
          onChange={handleToggle}
        />
        <span className={styles.toggleSwitchSlider}></span>
      </label>
    </div>
  );
};
