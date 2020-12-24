import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Footer from './Components/Footer/Footer';
import ItemDetailContainer from './Components/ItemDetails/ItemDetailContainer';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <>
      <NavBar />
    </>
    <>
      <Home />
    </>
    <div>
      <ItemListContainer />
    </div>
    <div>
      <ItemDetailContainer />
    </div>
    <div>
      <Footer />
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
