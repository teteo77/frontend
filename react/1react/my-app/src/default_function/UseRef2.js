import {useState, useRef} from "react";

// useState는 상태가 변하면 렌더링 된다.
  // ㄴ 증가할때마다 렌더링 된다.
// useRef
  // ㄴ useRef로 관리된 변수는 상태가 변화더라도 렌더링은 되지 않는다.
  // ㄴ 계산은 되지만 화면에 표시하고 싶지 않을때 사용
    // ㄴ useState가 랜더링 될때 useRef도 같이 랜더링 된다
function App() {
  const [snumber, setsnumber] = useState(0);
  const rnumber = useRef(0);
  
  const snumberup=()=>{
    setsnumber(snumber+1);
  }

  const rnumberup=()=>{
    rnumber.current = rnumber.current+1;
    console.log("rnumber",rnumber.current)
  }

  return (
    <div className="App">

      <button onClick={snumberup}>useState로 변수를 +1</button>
      <h1>useState로 관리되는 변수는 {snumber}입니다.</h1>
      <p>상태 증가와 함께 랜더링도 된다.</p>
      <hr></hr>

      <button onClick={rnumberup}> rnumber로 변수를 +1</button>
      <h1>rnumberup 관리되는 변수는 {rnumber.current}입니다.</h1>
      <p>상태 증가와 함께 랜더링도 된다.</p>
      <hr></hr>

    </div>
  );
}

export default App;
