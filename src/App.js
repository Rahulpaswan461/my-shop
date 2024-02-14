import './App.css';
import React from 'react';
import ProductListing from './containers/ProductListing';
import Header from './containers/Header';
import { Route,Routes } from 'react-router-dom';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <div className="App">
       <Header/>
      <Routes>
       
        <Route path='/' element={<ProductListing/>}/>
        <Route path='/product/:productId' element={<ProductDetails/>}/>
        <Route path='/*' element={<h1>Something went wrong</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
