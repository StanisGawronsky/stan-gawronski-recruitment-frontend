import { Todos } from "./features/Todos/Todos";

import { useAppSelector } from "./store/hooks";
import { selectMode } from "./redux/slices/modeSlice";
import styles from "./App.styles.module.scss";
import { Layout } from "./components/Layout/Layout";
import AudioComponent from "./components/Audio/Audio";
import DarkMode from "./features/DarkMode/DarkMode";

function App() {
  const darkMode = useAppSelector(selectMode);

  return (
    <div className={styles.appWrapper}>
      <Layout darkMode={darkMode}>
        <Todos darkMode={darkMode} />
      </Layout>
      {darkMode && <DarkMode />}
      {<AudioComponent />}
    </div>
  );
}

export default App;
