import React from 'react';
import PropTypes from 'prop-types';
import { withRestaurants } from '../RestaurantProvider/RestaurantProvider';
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
  categoriesList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  activeCategories: PropTypes.arrayOf(PropTypes.number).isRequired,
  cuisinesList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  activeCuisines: PropTypes.arrayOf(PropTypes.number).isRequired,
  toggleCategory: PropTypes.func.isRequired,
  toggleCuisine: PropTypes.func.isRequired,
};

export default withRestaurants(NavFilter);
