import { useReducer, useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");

  const reducerTodo = (state, action) => {
    console.log("state", state);
    console.log("state.todos", state.todos);
    console.log("action", action.type);

    switch (action.type) {
      case "adding":
        return {
          todos: [...state.todos, action.payload],
        };
      case "deleting":
        return {
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };

      default:
        return state;
    }
  };

  const initialState = {
    todos: [],
  };

  const [state, dispatchTodo] = useReducer(reducerTodo, initialState);

  const addNewItem = () => {
    dispatchTodo({
      type: "adding",
      payload: {
        id: Date.now(),
        text: newItem,
      },
    });
    setNewItem("");
  };

  const removeItem = (id) => {
    dispatchTodo({
      type: "deleting",
      payload: id,
    });
    setNewItem("");
  };

  return (
    <div className="App">
      <p>useReducer로 할일 메모 만들어 보기</p>
      <input
        placeholder="여기에 할일을 입력"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      ></input>
      <button onClick={addNewItem}>할일 추가</button>
      <ul>
        {/* <li>1. 할일1 표시 됨.</li>
        <li>2. 할일2 표시 됨.</li> */}
        {state.todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeItem(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
