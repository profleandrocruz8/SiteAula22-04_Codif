import './App.css';
import React from 'react';
import Footer from './Footer.js';
import Navbar from './Navbar.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './loginform.js';
import CadastroForm from './register/CadastroForm.js';


function App() {
  return (
    <div className="App">
            <Navbar />
            
            <br />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/register' element={<CadastroForm />} />

      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );

}
export default App;
