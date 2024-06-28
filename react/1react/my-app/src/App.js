import './App.css';
import { Link } from 'react-router-dom';

// 말 그대로, a태그 대신 Link 태그를 씁니다.a태그와 비슷하게 쓰면 됩니다.
// href 대신 to로 바뀌었네요!!
function App() {
  return (
    <div className="App">
      <h1>홈 화면 이에요</h1>
      <Link to="/Store">Store페이지로</Link><br/>
      <Link to="/UseState">UseState 페이지로</Link>
    </div>
  );
}

export default App;
