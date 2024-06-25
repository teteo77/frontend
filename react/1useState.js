import './App.css';
import {useState} from "react";

function App() {



// React는 상태(useState)가 변해야 렌더링 해준다.
// const [number, setNumber]  =  useState(0);
//   . count  : 변수
//    . setCount  : 변수를 변경하는 함수
  const [number, setNumber] = useState(100);

  const btnClick=()=>{
    setNumber(number + 1);
    console.log(number)
  }



  // 이러한 상태로는 랜더링이 되지 않는다.
  // let number = 100;
  // const btnClick=()=>{
  //   number = number+1;
  //   console.log(number)
  // }


  return (
    <div className="App">
      <button onClick = {btnClick}>plus one</button>
      <h1>{number}</h1>

    </div>
  );
}

export default App;
