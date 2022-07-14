// import { useState } from "react";
import { Button } from "./Button";

export function CounterStrike({ count, setCount }) {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Button text="-" cuandoClickeo={() => setCount(count - 1)} />
      <span style={{ marginRight: 8 }}>{count}</span>
      <Button text="+" cuandoClickeo={() => setCount(count + 1)} />
    </div>
  );
}
