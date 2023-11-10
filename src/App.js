// import logo from './logo.svg';
// import './App.css';
// import '%PUBLIC_URL%/main.css';
import { Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Tech from './pages/Tech';
import Noti from './pages/Noti';
import Qna from './pages/Qna';
import Product from './pages/Product';
import Business from './pages/Business';
import Main from './pages/Main';
import Manu from './pages/Menu';
import Footer from './pages/Footer';
function App() {
  return (
    <div className="App">
      <Manu/>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          <Route path="/qna" element={<Qna/>}></Route>
          <Route path="/noti" element={<Noti/>}></Route>
          <Route path="/tech" element={<Tech/>}></Route>
          <Route path="/business" element={<Business/>}></Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
