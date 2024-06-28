import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import Store from './Pages/Store';
import UseState from './default_function/UseState'


// 컴포넌트는 대문자로 작성 해야 한다
  // ㄴ ex) Store

function Routing() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/Store' element={<Store />} />
          <Route path='/UseState' element={<UseState />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default Routing;
