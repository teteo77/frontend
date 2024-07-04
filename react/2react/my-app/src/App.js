import './App.css';
import { useReducer, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [newItem, setNewItem] = useState('')

  const increase=()=>{
    setCount(count + 1)
  }

  const decrease=()=>{
    setCount(count - 1)
  }

    //3. 심부름꾼
    const reducer = (state, action) => {
      console.log(action.type)
      switch(action.type){
        case 'increasing':
          return state + 1
        case 'decreasing':
          return state - 1
        case 'double':
          return state * 2
        default:
          return state 
      }
    }

    const reducerTodo = (state, action) => {

      console.log("state", state)
      console.log("state.todos", state.todos)
      console.log("action", action.type)
      
      switch(action.type){
        case 'adding':
          return {
            todos: [...state.todos, action.payload ]
          }
        case 'deleting':
          return {
            todos: state.todos.filter(todo=> todo.id !== action.payload)
          }

        default:
          return state 
      }
    }

  //1. 사장님, Reducer //상태를 가지고 있다

  // const [state, dispatch] = useReducer(reducer, initialArg, init);
  
  const initialState = {
    todos: [],
  }

  //업체이름 reducer
  const [countState, dispatch] = useReducer(reducer, 0) //reducer, 초기값
  //업체이름 reducerTodo
  const [state, dispatchTodo] = useReducer(reducerTodo, initialState)

  //2. 직원, Dispatch // 지시내용
  // dispatch({type: 'increasing'})
  // dispatch({type: 'decreasing'})
  const addNewItem=()=>{
    dispatchTodo({
      type: 'adding',
      payload: {
        id: Date.now(),
        text: newItem
      }
    })
    setNewItem('')
  }

  const removeItem=(id)=>{
    dispatchTodo({
      type: 'deleting',
      payload: id
    })
    setNewItem('')
  }



  const increaseByReducer= () =>{
    dispatch({type: 'increasing'})
  }

  const decreaseByReducer= () =>{
    dispatch({type: 'decreasing'})
  }

  const doubleByReducer= () =>{
    dispatch({type: 'double'})
  }



  return (
    <div className="App">
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <h2>{count}</h2>
      <hr/>
      <h2>2. useReducer로 상태 관리하기</h2>
      <button onClick={increaseByReducer}>+</button>
      <button onClick={decreaseByReducer}>-</button>
      <button onClick={doubleByReducer}>x2</button>
      <h2>{countState}</h2>
      <hr></hr>
      <p>3. useReducer로 할일 메모 만들어 보기</p>
      <input placeholder='여기에 할일을 입력'
      value = {newItem}
      onChange={e=>setNewItem(e.target.value)}></input>
      <button onClick={addNewItem}>할일 추가</button>
      <ul>
        {/* <li>1. 할일1 표시 됨.</li>
        <li>2. 할일2 표시 됨.</li> */}
        {state.todos.map(todo=>(
          <li key={todo.id}>
            {todo.text}
            <button onClick={()=>removeItem(todo.id)}>삭제</button>
          </li>
        ))
        
        }
      </ul>

    </div>
  );
}

export default App;
