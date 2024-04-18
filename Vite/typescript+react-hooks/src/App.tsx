import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  MouseEvent,
  KeyboardEvent,
} from "react";

interface User {
  id: number;
  username: string;
}

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};
const myNum: number = 37;

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);
  // const [user, setUser] = useState<User>({} as User);
  const inputRef = useRef<HTMLInputElement>(null);
  //. TypeScript allows this because it understands that initially, the reference might not point to
  //anything (null), but it will eventually point to the correct HTML element once it's assigned.
  //Type Assertion: By passing null as an argument to useRef, you're basically telling TypeScript that
  // the reference initially doesn't point to any specific element. TypeScript understands this and
  //doesn't raise an error because it recognizes that null is a valid initial value for the reference.
  // Type Compatibility: TypeScript is designed to be flexible, especially when dealing with
  //compatibility between different types. null is considered compatible with any type, including
  //HTMLInputElement | null, so TypeScript doesn't raise an error.
  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);
  useEffect(() => {
    console.log("Mounting");
    console.log("users : ", users);
    return () => {
      console.log("unmounting");
    };
  }, [users]);
  const addOne = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => {
      e.preventDefault();
      setCount(count + 1);
    },
    [count]
  );
  const result = useMemo(() => fib(myNum), [myNum]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addOne}>Add</button>
      <h2>{result}</h2>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default App;
