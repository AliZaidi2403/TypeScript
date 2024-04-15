import Heading from "./components/Heading";
import { Section } from "./components/Section";
import { Counter } from "./components/Counter";
import { List } from "./components/List";
import { useState } from "react";
function App() {
  const [count, setCount] = useState<number>(1);
  const itemsList = ["apple", "banana", "mango", "grapes"];
  return (
    <>
      <Heading title="Hello World" />
      <Section title="Diffrent Title">This is my section</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={itemsList} render={(item: string) => <p>{item}</p>} />
    </>
  );
}

export default App;
