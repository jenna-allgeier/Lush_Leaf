import './styles/App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Nav from './components/Nav';
import AllPlants from './components/AllPlants'
import AddPlant from './components/AddPlant';
import PlantDetails from './components/PlantDetails';


function App() {
  return (
    <div className="App">
      <header className="navbar">
        <Nav />
      </header>
      <main className='main'>
        <Routes>
          <Route path="/" element={ <Welcome /> } />
          <Route path="/add-plant" element={ <AddPlant /> } />
          <Route path="/add-plant/:id" element={ <PlantDetails /> } />
          {/* <Route path="/all-plants" element={ <AllPlants /> } /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
