import logo from './logo.svg';
import './App.css';
import './components/static/Card.css'
import Welcome from './components/Welcome';
import React from 'react';
import Card from './components/Card';
function App() {
  return (
    <div className="App">
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <div className='cardContainer'>
      <Card />
      <Card />
      <Card />
      </div>
      
    </div>
  );
}

export default App;
