
import {useEffect, useState} from "react";



function App() {

  const [point, setPoint] = useState(0);
  const [grade, setGrade] = useState("신입사원");
  const [salary, setSalary] = useState(5000)
  const [color, setColor] = useState("gray")

  const btnWork=()=>{
    setPoint(point + 200);
    console.log("일 잘하고 있음?, 진급했음?")
    console.log("point",point)

    if (point === 400){
      setGrade("과장");
      setSalary(8000)
    }else if(point ===600){
      setGrade("부장");
      setSalary(12000)
    }
  }


  // useEffect(함수, 값)
      // ㄴ 매번 실행하고 싶지 않은 것을 useEffect로 관리한다. 
      // ㄴ (효과가 발생할때만 하는 것이므로)
  
  useEffect(()=> {
    console.log(" 진급을 축하 드립니다.")

    if (grade === "과장"){
      setColor('green')
    }else if(grade === "부장"){
      setColor('gold')
    }

  },[grade])

  return (
    <div className="App" style={{backgroundColor: `${color}`}} >
      <button onClick={btnWork}>일열심히함</button>
      <h1>당신의 직급은 {grade} 입니다. <br></br>
      연봉은 {salary}만원 입니다.</h1>

    </div>
  );
}

export default App;
