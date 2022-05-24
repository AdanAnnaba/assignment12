import { Routes , Route} from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddProduct from './Pages/AddProduct/AddProduct';
import AllProducts from './Pages/Home/AllProducts';
import Dashboard from './Pages/Home/Dashboard';
import Header from './Pages/Home/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Home/Login';
import ReqAuth from './Pages/Home/ReqAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/addproduct' element={<ReqAuth><AddProduct></AddProduct></ReqAuth>}></Route>
        <Route path='/dashboard' element={<ReqAuth><Dashboard><AllProducts></AllProducts></Dashboard></ReqAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
