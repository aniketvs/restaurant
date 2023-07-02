import React, { useState } from 'react';
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Cart from './components/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from "./redux/store";
import { Provider } from "react-redux";
function App() {
  const [counter,setcounter]=useState(0);

  return (
    <>

      <BrowserRouter>
       <Provider store={store}>
        <Header />
        <Routes>
          <Route path='/' element={<Home counter={counter} setcounter={setcounter}/>} />
          <Route path='/cart' element={<Cart counter={counter} setcounter={setcounter}/>} />
        </Routes>
        <Footer />
        </Provider>
      </BrowserRouter>


    </>
  );
}

export default App;
