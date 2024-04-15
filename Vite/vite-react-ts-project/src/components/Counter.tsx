import { ReactNode } from "react";

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};
export function Counter({ children, setCount }: CounterProps) {
  return (
    <>
      <h1>{children}</h1>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
    </>
  );
}
