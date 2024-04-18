import { useState, ReactNode, useReducer, ChangeEvent } from "react";

type ChildrenType = {
  children: (num: number) => ReactNode;
};
type initState = {
  count: number;
  text?: string;
};
type Action =
  | { type: "INCREMENT"; payload?: number }
  | { type: "DECREMENT"; payload?: number }
  | { type: "RESET" }
  | { type: "INPUT_TXT"; payload?: string };

const reducer = (state: initState, action: Action): initState => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + (action.payload || 1) };
    case "DECREMENT":
      return { ...state, count: state.count - (action.payload || 1) };
    case "RESET":
      return { ...state, count: 0 };
    case "INPUT_TXT":
      return { ...state, text: action.payload };
    default:
      throw new Error("Invalid action");
  }
};

function Counter({ children }: ChildrenType) {
  const [state, dispatch] = useReducer(reducer, { count: 0, text: "" });
  const [value, setValue] = useState<number>();
  return (
    <>
      <h1> {children(state.count)}</h1>
      <div>
        <input
          value={value}
          onChange={(e) => setValue(+e.target.value)}
          type="text"
        />
        <button onClick={() => dispatch({ type: "INCREMENT", payload: value })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT", payload: value })}>
          -
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        <input
          type="text"
          value={state.text}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: "INPUT_TXT", payload: e.target.value })
          }
        />
        <div>
          <p>{state.text}</p>
        </div>
      </div>
    </>
  );
}

export default Counter;
