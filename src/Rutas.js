import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Login from './Paginas/Login/Login';
import Principal from './Paginas/Principal/Principal';

const Rutas = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Principal" element={<Principal />} />
        </Routes>
      </Router>
  );
};

export default Rutas;