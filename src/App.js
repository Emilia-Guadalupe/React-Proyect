import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import SearchBar from './Components/SearchBar/SearchBar';
import Header from './Components/Header/Header';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <>
    <NavBar />
    </>
    <div>
      <Header />
    </div>
    <div>
      <SearchBar />
    </div>
    <div>
      <ItemListContainer />
    </div>
    <>
      <ItemCount />
    </>
    <div>
      <Footer />
    </div>
    </div>
  );
}

export default App;
