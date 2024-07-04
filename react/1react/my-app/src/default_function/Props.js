import {useState} from "react";

// props가 무엇인가요?
  // ㄴ 프로퍼티 properties의 줄임말입니다.
  // ㄴ 어떤 내용을 전달할 경우 그 특성(속성)을 전달합니다
// Child App에서는 props를 받아오고,
  // ㄴ 사용시 받아온 값은 props.value라고,
// 생성된 콤포넌트는 서로 별개가 된다.
  // ㄴ 서로 알지 못한다.

function Child(props) {
  
  const [money, setMoney] = useState(0)

  const getMoney=()=>{
    setMoney(money+5)
  }

  return (
    <div className="Child">
      <h1>여기는 Child {props.name} 앱 입니다.</h1>
      <button onClick={getMoney}>용돈 주세요.</button>
      <p>용돈을 {money}만큼 받았습니다.</p>
      <p>용돈을 아빠의 월급 {props.papamoney - money}만원 되있겠군요</p>

      <hr/>
    </div>
  );
}


function App() {

  const [papamoney, setPapamoney] = useState(0);
  const getSalary=()=>{
    setPapamoney(papamoney+700);

  }


  return (
    <div className="App">
      <h1>여기는 아빠 앱 입니다.</h1>
      <button onClick={getSalary}>아빠 월급날</button>
      <p>월급 계좌의 잔액은 {papamoney}만원 입니다.</p>
      <hr></hr>

      <Child papamoney = {papamoney} name="제니"/>

      <Child papamoney = {papamoney} name="BTS"/>
      {/* 생성된 콤포넌트는 서로 별개가 된다.
        ㄴ 서로 알지 못한다. */}
    </div>
  );
}

export default App;
