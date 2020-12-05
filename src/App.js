import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import SearchBar from './Components/SearchBar/SearchBar';
import './App.css';
import Header from './Components/Header/Header';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
    <>
    <NavBar />
    </>
    <div>
      <SearchBar />
    </div>
    <div>
      <Header />
    </div>
    <div>
      <ItemListContainer />
    </div>
    </div>
  );
}

export default App;
