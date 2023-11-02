// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarComp from './pages/NavComp';

// function App() {
//   return (
//     <div className="App">
      
//       <NavbarComp/>

//     </div>
//   );
// }

// export default App;

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Products from './pages/Products'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { routes } from './constants/routes.json'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Products />
        <Footer />
      </Router>
      <Cart />
    </>
  )
}

export default App
