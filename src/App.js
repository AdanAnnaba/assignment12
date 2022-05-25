import { Routes , Route} from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddProduct from './Pages/AddProduct/AddProduct';
import Dashboard from './Pages/Home/Dashboard';
import Header from './Pages/Home/Header';
import Home from './Pages/Home/Home';
import AllProducts from './Pages/Home/AllProducts';
import Login from './Pages/Home/Login';
import ReqAuth from './Pages/Home/ReqAuth';
import Reviews from './Pages/Home/Reviews';
import Purchase from './Pages/Home/Purchase';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/purchase' element={<ReqAuth><Purchase></Purchase></ReqAuth>}></Route>
        <Route path='/dashboard' element={<ReqAuth><Dashboard></Dashboard></ReqAuth>}>
          <Route index element={<AllProducts></AllProducts>}></Route>
          <Route path='reviews' element={<Reviews></Reviews>}></Route>
          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
