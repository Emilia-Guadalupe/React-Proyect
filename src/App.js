import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Consultas from './Components/Consultas/Consultas';
import Libros from './Components/ItemDisplay/ItemDisplay';
import Footer from './Components/Footer/Footer';
import ItemDetailContainer from './Components/ItemDetails/ItemDetailContainer';
import ItemDetail from './Components/ItemDetails/ItemDetail';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <>
      <NavBar />
    </>
    <Switch>
      <Route exact path="/">
      <Home />
      </Route>
      <Route path="/libros">
      <Libros />
      </Route>
      <Route path="/ItemDetailContainer/:id">
      <ItemDetailContainer />
      </Route>
      <Route exact path="/ItemDetail">
      <ItemDetail />
      </Route>
      <Route path="/about">
      <About />
      </Route>
      <Route path="/consultas">
      <Consultas />
      </Route>
    </Switch>
    <div>
      <Footer />
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
