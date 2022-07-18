import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

function App() {
  const footerYear = "2077";

  return (
    <div>
      <Header />
      <TodoList />
      <Footer year={footerYear} />
    </div>
  );
}

export default App;
