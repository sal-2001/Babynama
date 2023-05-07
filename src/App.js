import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Payment from './pages/payment/Payment';

function App() {
  return (
    <div className="App">
      <Router>
          <div className='max-w-[1440px] mx-auto bg-white'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route  path='/payment' element={<Payment/>}/>
            </Routes>
          </div>
      </Router>
    </div>
  );
}

export default App;
