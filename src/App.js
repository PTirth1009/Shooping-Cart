import logo from './logo.svg';
import './App.css';
import Header from "./Componet/Header/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './Componet/Cart/Cart';
import Product from './Componet/Content/Product';
import { data } from './Componet/Content/Data';


function App() {
  // const {productItem} = data;
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes >
          {/* <Routen productItem = {productItem}/> */}
          <Route path='/' element={<Product />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
