import { useState } from 'react';
import './App.css';
import Product from './productComponent/Product';
import Searchbar from './productComponent/Searchbar';
import ShowSingleProduct from './productComponent/ShowSingleProduct';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './productComponent/Home';

function App() {
const [singleProduct, setSingleProduct] = useState([])
// console.log(singleProduct)
  return (
    <div className="App" >
      <BrowserRouter>
      <Searchbar data = {setSingleProduct}/>
      <Routes>
      <Route path = "Product" element = {<Product/>}/>
      <Route path = "ShowSingleProduct" element = {<ShowSingleProduct data = {singleProduct}/>}/>
      <Route path = "/" element = {<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;