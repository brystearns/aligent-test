import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RATING_LOWER_LIMIT, RATING_UPPER_LIMIT, COST_LOWER_LIMIT, COST_UPPER_LIMIT } from '../../constants/restaurantFilters.constants';
import {
  getListOfRestaurants,
  getCategories,
  getCuisines,
} from '../../services/restaurantService';

const RestaurantContext = React.createContext();

export const withRestaurants = WrappedComponent => props => (
  <RestaurantContext.Consumer>
    {restaurantContext => (
      <WrappedComponent
        restaurantList={restaurantContext.restaurantList}
        categoriesList={restaurantContext.categoriesList}
        cuisinesList={restaurantContext.cuisinesList}
        activeRestaurant={restaurantContext.activeRestaurant}
        activeCategories={restaurantContext.activeCategories}
        activeCuisines={restaurantContext.activeCuisines}
        activeCost={restaurantContext.activeCost}
        activeRating={restaurantContext.activeRating}
        toggleRatingChange={restaurantContext.toggleRatingChange}
        toggleCostChange={restaurantContext.toggleCostChange}
        toggleCategory={restaurantContext.toggleCategory}
        toggleCuisine={restaurantContext.toggleCuisine}
        toggleActiveRestaurant={restaurantContext.toggleActiveRestaurant}
        {...props}
      />
    )}
  </RestaurantContext.Consumer>
);

class RestaurantProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    restaurantList: [],
    categoriesList: [],
    cuisinesList: [],
    activeRestaurant: {},
    activeCategories: [],
    activeCuisines: [],
    activeRating: [RATING_LOWER_LIMIT, RATING_UPPER_LIMIT],
    activeCost: [COST_LOWER_LIMIT, COST_UPPER_LIMIT],
  };

  componentDidMount() {
    this.getLocationInfo();
  }

  async getLocationInfo() {
    const [categoriesList, cuisinesList] = await Promise.all([
      getCategories(),
      getCuisines(),
    ]);
    this.setState({
      categoriesList,
      cuisinesList,
    }, this.getRestaurantList);
  }

  getRestaurantList = async () => {
    const { activeCuisines, activeCategories } = this.state;
    const restaurantList = await getListOfRestaurants(activeCuisines, activeCategories);
    this.setState({
      restaurantList,
    });
  };

  toggleRatingChange = activeRating => this.setState({ activeRating });

  toggleCostChange = activeCost => this.setState({ activeCost });

  toggleCategory = (category) => {
    const { activeCategories } = this.state;
    const index = activeCategories.indexOf(category);
    if (index > -1) {
      activeCategories.splice(index, 1);
    } else {
      activeCategories.push(category);
    }
    this.setState({ activeCategories }, this.getRestaurantList);
  };

  toggleCuisine = (cuisine) => {
    const { activeCuisines } = this.state;
    const index = activeCuisines.indexOf(cuisine);
    if (index > -1) {
      activeCuisines.splice(index, 1);
    } else {
      activeCuisines.push(cuisine);
    }
    this.setState({ activeCuisines }, this.getRestaurantList);
  };

  toggleActiveRestaurant = activeRestaurant => this.setState({ activeRestaurant });

  render() {
    const {
      restaurantList,
      categoriesList,
      cuisinesList,
      activeRestaurant,
      activeCategories,
      activeCuisines,
      activeCost,
      activeRating,
    } = this.state;
    return (
      <RestaurantContext.Provider
        value={{
          restaurantList,
          categoriesList,
          cuisinesList,
          activeRestaurant,
          activeCategories,
          activeCuisines,
          activeCost,
          activeRating,
          toggleRatingChange: this.toggleRatingChange,
          toggleCostChange: this.toggleCostChange,
          toggleCategory: this.toggleCategory,
          toggleCuisine: this.toggleCuisine,
          toggleActiveRestaurant: this.toggleActiveRestaurant,
        }}
      >
        {this.props.children}
      </RestaurantContext.Provider>
    );
  }
}

export default RestaurantProvider;
