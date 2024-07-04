import './App.css';
import { Link } from 'react-router-dom';

// 말 그대로, a태그 대신 Link 태그를 씁니다.a태그와 비슷하게 쓰면 됩니다.
// href 대신 to로 바뀌었네요!!
function App() {
  return (
    <div className="App">
      <h1>홈 화면 이에요</h1>
      <h2>Routing.js안에 App있어요</h2>

      <Link to="/Store">Store페이지로</Link><br/>
      <Link to="/UseState">UseState 페이지로</Link><br/>
      <Link to="/useEffect">useEffect 페이지로</Link><br/>
      <Link to="useRef">useRef 페이지로</Link><br/>
      <Link to="useRef2">useRef2 페이지로</Link><br/>
      <Link to="Props">Props 페이지로</Link><br/>
      <Link to="Reducer">Reducer 페이지로</Link><br/>
      <Link to="Reducer2">Reducer2 페이지로</Link><br/>
    </div>
  );
}

export default App;
