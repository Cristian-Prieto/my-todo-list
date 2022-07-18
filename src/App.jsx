import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

import styles from "./App.module.css"

function App() {
  const footerYear = "2077";

  return (
    <div className={styles.app}>
      <Header />
      <TodoList />
      <Footer year={footerYear} />
    </div>
  );
}

export default App;
