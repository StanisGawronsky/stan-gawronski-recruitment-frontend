import clsx from "clsx";
import styles from "./Header.styles.module.scss";
import {
  selectMusicLoaded,
  toggleMode,
  toggleMusic,
} from "redux/slices/modeSlice";
import { ToggleSwitch } from "components/ToggleSwitch";
import { useAppDispatch, useAppSelector } from "store/hooks";

interface HeaderProps {
  darkMode: boolean;
}

export const Header = ({ darkMode }: HeaderProps) => {
  const dispatch = useAppDispatch();
  const canPlay = useAppSelector(selectMusicLoaded);

  const switchMode = () => {
    dispatch(toggleMode());
    dispatch(toggleMusic());
  };
  return (
    <>
      <div className={clsx(styles.header, darkMode && styles.headerDarkMode)}>
        <h2>TODOS</h2>
        <ToggleSwitch
          className={clsx(!canPlay && styles.hidden)}
          callback={switchMode}
        />
      </div>
    </>
  );
};
