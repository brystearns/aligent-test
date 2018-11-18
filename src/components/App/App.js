import React from 'react';
import RestaurantProvider from '../RestaurantProvider/RestaurantProvider';
import NavFilter from '../NavFilter/NavFilter';
import RestaurantsList from '../RestaurantsList/RestaurantsList';
import ActiveRestaurant from '../ActiveRestaurant/ActiveRestaurant';
import './App.css';

const App = () => (
  <RestaurantProvider>
    <div className="App">
      <NavFilter />
      <main>
        <RestaurantsList />
        <ActiveRestaurant />
      </main>
    </div>
  </RestaurantProvider>
);

export default App;
