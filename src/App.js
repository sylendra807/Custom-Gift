
import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Login from '../src/Components/Login.jsx'
import Home from '../src/Components/Home.jsx'
import Carosel from './Components/Carosel.jsx';
import Shop from './Components/Shop.jsx';
import Landing from './Components/Landing.jsx';
import Address from './Components/Address.jsx';
import Confirmation from './Components/Confirmation.jsx';
import Adminlogin from './Components/Adminlogin.jsx'
import AdminHome from './Components/AdminHome.jsx';
import Add from './Components/Add.jsx';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route  element={<Login/>} path='/'/>
      <Route  element={<Home/>} path='/home'/>
      <Route  element={<Carosel/>} path='/carosel'/>
      <Route  element={<Shop/>} path='/shop'/>
      <Route  element={<Landing/>} path='/lan'/>
      <Route  element={<Address/>} path='/a'/>
      <Route  element={<Confirmation/>} path='/con'/>
      <Route  element={<Adminlogin/>} path='/al'/>
      <Route  element={<AdminHome/>} path='/ah'/>
      <Route  element={<Add/>} path='/add'/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
