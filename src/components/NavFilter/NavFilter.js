import React from 'react';
import { withRestaurants, restaurantProviderProps } from '../RestaurantProvider/RestaurantProvider';
import SelectableList from '../shared/SelectableList/SelectableList';
import RatingSlider from '../RatingSlider/RatingSlider';
import CostSlider from '../CostSlider/CostSlider';

const NavFilter = ({ categoriesList, cuisinesList, toggleCategory, toggleCuisine, activeCategories, activeCuisines }) => (
  <header>
    <div className="filters">
      <SelectableList
        className="categoriesList"
        list={categoriesList}
        activeItems={activeCategories}
        title="Categories"
        toggleSelect={toggleCategory}
      />
      <SelectableList
        className="cuisinesList"
        list={cuisinesList}
        activeItems={activeCuisines}
        title="Cuisine"
        toggleSelect={toggleCuisine}
      />
    </div>
    <div className="sliders">
      <RatingSlider />
      <CostSlider />
    </div>
  </header>
);

NavFilter.propTypes = {
  ...restaurantProviderProps,
};

export default withRestaurants(NavFilter);
