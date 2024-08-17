import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Shops from './components/Shops';
import Owners from './components/Owners';
import Rentals from './components/Rentals';
import './styles.css';
import Register from './components/Register';
import Login from './components/Login';


const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<div><p>Welcome to the Shop Rental Management System!</p></div>} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/owners" element={<Owners />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

        </Routes>
      </main>
    </Router>
  );
};

export default App;
