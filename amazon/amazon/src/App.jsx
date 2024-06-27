import React from 'react'
import Navbar from './components/navbar/Navbar';
import Display from './components/display/Display';
import "./App.css"
import Items from './components/items/Items';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Display/>
      <Items/>
      <Footer/>
    </div>
  )
}

export default App;
