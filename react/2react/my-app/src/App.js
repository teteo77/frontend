import './App.css';
import { useReducer, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

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

  //1. 사장님, Reducer //상태를 가지고 있다

  // const [state, dispatch] = useReducer(reducer, initialArg, init);
  const [countState, dispatch] = useReducer(reducer, 0) //reducer, 초기값

  //2. 직원, Dispatch // 지시내용
  // dispatch({type: 'increasing'})
  // dispatch({type: 'decreasing'})
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
      <p>1. 할일 표시 됨.</p>

    </div>
  );
}

export default App;
