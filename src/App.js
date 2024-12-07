// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/JS/HomePage';
import SellingBirds from './Pages/JS/SellingBirds';
import Cages from './Pages/JS/Cages';
import Accessories from './Pages/JS/Accessories';
import BirdsCategories from './Pages/JS/BirdsCategories';
import HealthyFoods from './Pages/JS/HealthyFoods';
import BreedingAndTreatment from './Pages/JS/BreedingAndTreatment';
import Carts from './Pages/JS/Carts';
import LoveBirdsPage from './Pages/JS/LoveBirdsPage';
import RingneckBirdsPage from './Pages/JS/RingneckBirdsPage';
// import CheckoutProceed from './Pages/JS/CheckoutProceed';
// import AllPagesLayout from './Layout/AllPagesLayout';

const App = () => {
  return (
  

    <Router>
      <Routes>
        <Route path="/" element={<HomePage mainHeading="Explore the Stunning Realm of Wild Birdlife." paraText="Enter a fascinating bird haven filled with dazzling feathered wonders, where each bird's unique colors and melodies create a symphony of natural splendor at our bird store." />} />
        {/* <Route path="/" element={<AllPagesLayout />} /> */}
        <Route path="/sellingBirds" element={<SellingBirds path = "/sellingBirds" />} />
        <Route path="/cages" element={<Cages path = "/cages" />} />
        <Route path="/accessories" element={<Accessories path = "/accessories" />} />
        <Route path="/birdsCategories" element={<BirdsCategories path = "/birdsCategories" />} />
        <Route path="/healthyFoods" element={<HealthyFoods path = "/healthyFoods" />} />
        <Route path="/breedingFormulaes" element={<BreedingAndTreatment  path = "/breedingFormulaes"/>} />
        <Route path="/carts" element={<Carts path = "/carts" />} />
        <Route path="/ringNeckBirds" element={<RingneckBirdsPage path = "/birdsCategories" />} />
        <Route path="/loveBirds" element={<LoveBirdsPage path = "/birdsCategories" />} />
        {/* <Route path="/checkout-proceed" element={<CheckoutProceed />} /> */}



      </Routes>
    </Router> 

        );
      }

export default App;
