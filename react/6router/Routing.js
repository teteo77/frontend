import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import Store from './Pages/Store';


// 컴포넌트는 대문자로 작성 해야 한다
  // ㄴ Pages/Store.js가 컴포넌트다

function Routing() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/Store' element={<Store />} />
        </Routes>
      </BrowserRouter>
    <h1>라우팅.js 폴더</h1>
    </div>
  );
}

export default Routing;
