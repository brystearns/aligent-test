import React from 'react';
import PropTypes from 'prop-types';
import { withRestaurants } from '../RestaurantProvider/RestaurantProvider';

const RestaurantsList = ({ restaurantList, toggleActiveRestaurant, activeCost, activeRating }) => (
  <section className="restaurantList">
    <h2>Results</h2>
    <ul>
      {restaurantList.map((restaurant) => {
        const isCost = restaurant.price >= activeCost[0] && restaurant.price <= activeCost[1];
        const isRating = restaurant.rating >= activeRating[0] && restaurant.rating <= activeRating[1];
        return (isCost && isRating) && (
          <li key={restaurant.id} onClick={() => toggleActiveRestaurant(restaurant)}>{restaurant.name}</li>
        );
      })}
    </ul>
  </section>
);

RestaurantsList.propTypes = {
  restaurantList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  toggleActiveRestaurant: PropTypes.func.isRequired,
};

export default withRestaurants(RestaurantsList);
