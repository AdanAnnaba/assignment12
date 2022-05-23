import { Routes , Route} from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddProduct from './Pages/AddProduct/AddProduct';
import Header from './Pages/Home/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Home/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/addproduct' element={<AddProduct></AddProduct>}></Route>
      </Routes>
    </div>
  );
}

export default App;
