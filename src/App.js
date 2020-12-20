import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import SearchBar from './Components/SearchBar/SearchBar';
import Header from './Components/Header/Header';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Footer from './Components/Footer/Footer';
import ItemDetailContainer from './Components/ItemDetails/ItemDetailContainer';

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
    <div>
      <ItemDetailContainer />
    </div>
    <div>
      <Footer />
    </div>
    </div>
  );
}

export default App;
