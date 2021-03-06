import { Routes , Route} from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './Pages/About/About';
import AddProduct from './Pages/AddProduct/AddProduct';
import Dashboard from './Pages/Home/Dashboard';
import Header from './Pages/Home/Header';
import Home from './Pages/Home/Home';
import AllProducts from './Pages/Home/AllProducts';
import Login from './Pages/Home/Login';
import SignUp from './Pages/Home/SignUp';
import ReqAuth from './Pages/Home/ReqAuth';
import Reviews from './Pages/Home/Reviews';
import Purchase from './Pages/Home/Purchase';
import NotFound from './Pages/Home/NotFound';
import Blogs from './Pages/Home/Blogs';
import AllUser from './Pages/Home/AllUser';
import Myorders from './Pages/Home/Myorders';
import ReqAdmin from './Pages/Home/ReqAdmin';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/purchase' element={<ReqAuth><Purchase></Purchase></ReqAuth>}></Route>
        <Route path='/dashboard' element={<ReqAuth><Dashboard></Dashboard></ReqAuth>}>
          <Route index element={<AllProducts></AllProducts>}></Route>
          <Route path='reviews' element={<Reviews></Reviews>}></Route>
          <Route path='myorders' element={<Myorders></Myorders>}></Route>
          <Route path='addproduct' element={<ReqAdmin><AddProduct></AddProduct></ReqAdmin>}></Route>
          <Route path='allusers' element={<ReqAdmin><AllUser></AllUser></ReqAdmin>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
    
  );
}

export default App;
