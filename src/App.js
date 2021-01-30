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
import CartContainer from './Components/CartContainer/CartContainer';
import Categories from './Components/Categories/Categories';
import {ProductContextProvider} from './Context/ProductContext';
import  {CartContextProvider} from './Context/CartContext';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <ProductContextProvider>
    <div className="App">
    <CartContextProvider>
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
      <Route path="/ItemDetailContainer/:category/:id">
      <ItemDetailContainer />
      </Route>
      <Route exact path="/ItemDetail">
      <ItemDetail />
      </Route>
      <Route path="/categories/:category">
      <Categories />
      </Route>
      <Route path="/about">
      <About />
      </Route>
      <Route path="/consultas">
      <Consultas />
      </Route>
      <Route path="/carrito">
      <CartContainer />
      </Route>
    </Switch>
    </CartContextProvider>
    <div>
      <Footer />
    </div>
    </div>
    </ProductContextProvider>
    </BrowserRouter>
  );
}

export default App;
