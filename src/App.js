import './App.css';
import React  from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import AjoutProduit from './components/AjoutProduit';
import ListProduit from './components/ListProduit';
import ModifierProduit from './components/ModifierProduit';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/ListProduit' element={<ListProduit />} />
            <Route path='/ModifierProduit/:id' element={<ModifierProduit />} />
            <Route path='/AjouterProduit' element={<AjoutProduit />} />
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
