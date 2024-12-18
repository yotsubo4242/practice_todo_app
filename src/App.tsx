import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

type props = {
  title?: string;
  children?: React.ReactNode;
};

type todo = {
  text: string;
  timeStamp: string;
};

type todolist = todo[];

function App({ children }: props) {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<todolist>([]);

  // console.log("todos", todos);

  function addButtonHandler() {
    if (!text) {
      return;
    }
    setTodos([...todos, { text, timeStamp: new Date().toISOString() }]);
    setText("");
  }

  return (
    <>
      {children}
      {/* <p>{text}</p> */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button style="add" onClick={() => addButtonHandler()}>
        Add
      </Button>
      {todos.map((todo, index) => (
        <div key={index}>
          <p>{todo.text}</p>
          <p>{todo.timeStamp}</p>
          <Button
            style="delete"
            onClick={() => setTodos(todos.filter((_, i) => i !== index))}
          >
            Delete
          </Button>
        </div>
      ))}
      <Button style="delete">Delete</Button>
      <Button style="edit">Edit</Button>
      <Button>Default</Button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
