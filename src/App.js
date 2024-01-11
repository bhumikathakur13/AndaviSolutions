import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Order from './Order';
import SignUp from './Signup';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route exact path="/orders" element={<Order/>}></Route>
          <Route exact path="/signUp" element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
