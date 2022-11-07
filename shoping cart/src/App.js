import './App.css';
import Header from "./components/Header/Header"
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import {Container} from "react-bootstrap"


function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

    </>
  );
}

export default App;
