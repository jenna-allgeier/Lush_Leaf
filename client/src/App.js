import './styles/App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Nav from './components/Nav';
import AllPlants from './components/AllPlants'
import AddPlant from './components/AddPlant';
import PlantDetails from './components/PlantDetails';
import { useState } from 'react';
import AllComments from './components/AllComments';
import AddComment from './components/AddComment';


const App = () => {

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
          <Route path="/all-plants" element={ <AllPlants /> } />
          <Route path="/all-plants/comments" element={ <AllComments /> } />
          <Route path="/all-plants/comments/:id" element={ <AddComment /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
