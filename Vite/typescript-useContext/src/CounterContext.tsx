import {
  createContext,
  useReducer,
  ChangeEvent,
  ReactElement,
  useCallback,
  useContext,
} from "react";

type StateType = {
  count: number;
  text?: string;
};
const initState: StateType = {
  count: 0,
  text: "",
};
type Action =
  | { type: "INCREMENT"; payload?: number }
  | { type: "DECREMENT"; payload?: number }
  | { type: "RESET" }
  | { type: "INPUT_TXT"; payload?: string };

const reducer = (state: StateType, action: Action): StateType => {
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

const useCounterContext = (initState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const increment = useCallback(
    (value: number) => dispatch({ type: "INCREMENT", payload: value }),
    []
  );
  const decrement = useCallback(
    (value: number) => dispatch({ type: "DECREMENT", payload: value }),
    []
  );
  const reset = useCallback(() => dispatch({ type: "RESET" }), []);
  const inputtxt = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: "INPUT_TXT", payload: e.target.value }),
    []
  );
  return { state, increment, decrement, reset, inputtxt };
};

type UserCounterContextType = ReturnType<typeof useCounterContext>;

const initialContextState: UserCounterContextType = {
  state: initState,
  increment: (value: number) => {},
  decrement: (value: number) => {},
  reset: () => {},
  inputtxt: (e: ChangeEvent<HTMLInputElement>) => {},
};

export const CounterContext =
  createContext<UseCounterContextType>(initialContextState);

type ChildrenType = {
  children?: ReactElement | ReactElement[] | undefined;
};

export const CounterProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CounterContext.Provider value={useCounterContext(initState)}>
      {children}
    </CounterContext.Provider>
  );
};

type UseCounterHookType = {
  count: number;
  increment: (value: number) => void;
  decrement: (value: number) => void;
  reset: () => void;
};

export const useCounter = (): UseCounterHookType => {
  const {
    state: { count },
    increment,
    decrement,
    reset,
  } = useContext(CounterContext);
  return { count, increment, decrement, reset };
};

type UseCounterTextHookType = {
  text: string;
  inputtxt: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useCounterText = (): UseCounterTextHookType => {
  const {
    state: { text },
    inputtxt,
  } = useContext(CounterContext);
  return { text, inputtxt };
};
