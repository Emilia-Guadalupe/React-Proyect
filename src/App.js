import React from 'react';
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
    <>
    <NavBar />
    </>
    <div>
      <SearchBar />
    </div>
    </div>
  );
}

export default App;
