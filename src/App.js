import { Routes , Route} from 'react-router-dom';
import './App.css';
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
      </Routes>
    </div>
  );
}

export default App;
