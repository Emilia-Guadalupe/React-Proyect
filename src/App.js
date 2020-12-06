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
      <Header />
    </div>
    <div>
      <SearchBar />
    </div>
    <div>
      <ItemListContainer />
    </div>
    </div>
  );
}

export default App;
