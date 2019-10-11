import React from 'react';
import CityList from '../containers/city_list';
import SelectedCity from './selected_city';

const App = () => {
  return (
    <div className="app">
      <div className="cities">
        <CityList />
      </div>
      <div className="active-city">
        <SelectedCity />
      </div>
    </div>
  );
};

export default App;
