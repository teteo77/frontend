import { useState, useRef } from "react";
// useRef는 렌더링에 필요하지 않은 값을 참조할 수 있는 React Hook입니다.

// 우선 useRef()를  사용하지 않고 해보자.
function Badinput() {
  const [name, setName] = useState("Guest");
  const [inputValue, setinputValue] = useState("");

  const hinputchange = (event) => {
    // console.log(event.target.value);
    setinputValue(event.target.value);
  };
  // ㄴ 1버튼을 누르면
  // input태그에 onChange=hinputchange()호출되서 seinputValue로 값을 넣어준다

  const hchangename = () => {
    setName(inputValue);
  };
  // ㄴ 2버튼을 누르면 hchangename()함수 안에
  // setName(inputValue)가 실행 된다.

  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={hinputchange}></input>
      <button onClick={hchangename}>이름 전송</button>

      <h1>안녕하세요. {name}님!</h1>
      {/* 3 변경된 값을 출력한다 */}
    </div>
  )
}


function Goodinput() {
  const [name, setName] = useState("Guest");
  const inputRef = useRef("");

  const refChange = () =>{
    setName(inputRef.current.value);
  }

  return (
    <div className="Goodinput">
      <input type="text" ref={inputRef} onChange = {refChange}></input>
      <h1>안녕하세요. {name}</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Badinput />
      <hr></hr>
      <Goodinput/>
    </div>
  );
}

export default App;
