import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css'; // Importe o arquivo de estilo Nav.css aqui
import Logo from './logoaguia.png';

function Navbar() {
  const [isRounded, setIsRounded] = useState(false);

  const toggleRounded = () => {
    setIsRounded(!isRounded);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="Logo" className="navbar-logo"/>
        </a>
        <button
          className={`navbar-toggler ${isRounded ? 'rounded-toggler' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleRounded}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">Home</a>            
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/register">Faça seu Cadastro</a>
            </li>
            
          </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
