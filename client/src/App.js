import './styles/App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Nav from './components/Nav';
import AllPlants from './components/AllPlants'
import AddPlant from './components/AddPlant';
import PlantDetails from './pages/PlantDetails';
import AllComments from './components/AllComments';
import AddComment from './components/AddComment';
import UpdatePlant from './components/UpdatePlant';
import InputPlant from './pages/inputPlant';
import PlantProfile from './pages/PlantDetails';


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
          <Route path="/all-plants/:id" element={ <PlantDetails /> } />
          <Route path="/all-plants" element={ <AllPlants /> } />
          <Route path="/update-plant/:id" element={ <UpdatePlant /> } />
          <Route path="/all-plants/:id" element={ <AllComments /> } />
          <Route path="/all-plants/:id" element={ <AddComment /> } />
          <Route path="/all-plants/:id" element={ <PlantProfile /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
