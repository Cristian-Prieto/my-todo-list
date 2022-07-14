// import { useState } from "react";
// import { CounterStrike } from "./components/CounterStrike";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

function App() {
  // const [count, setCount] = useState(0);
  const footerYear = "2077";

  return (
    <div>
      <Header />
      <TodoList />
      <Footer year={footerYear} />
      {/* <CounterStrike count={count} setCount={setCount} /> */}
    </div>
  );
}

export default App;
