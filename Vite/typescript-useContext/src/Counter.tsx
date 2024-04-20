import { ReactNode, ChangeEvent, useState } from "react";
import { useCounter, useCounterText } from "./CounterContext";
useCounter;
type ChildrenType = {
  children: (num: number) => ReactNode;
};

function Counter({ children }: ChildrenType) {
  const { increment, decrement, reset, count } = useCounter();
  const { text, inputtxt } = useCounterText();
  const [value, setValue] = useState<number>(0);
  return (
    <>
      <h1> {children(count)}</h1>
      <div>
        <input
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(+e.target.value)
          }
          type="text"
        />
        <button onClick={() => increment(value)}>+</button>
        <button onClick={() => decrement(value)}>-</button>
        <button onClick={reset}>Reset</button>
        <input type="text" onChange={inputtxt} />
        <div>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

export default Counter;
