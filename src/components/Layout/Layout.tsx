import { ReactNode } from "react";
import styles from "./Layout.styles.module.scss";
import { Header } from "components/Header";

interface LayoutProps {
  children: ReactNode;
  darkMode: boolean;
}

export const Layout = ({ children, darkMode }: LayoutProps) => {
  return (
    <main className={styles.layout}>
      <Header darkMode={darkMode} />
      {children}
    </main>
  );
};
