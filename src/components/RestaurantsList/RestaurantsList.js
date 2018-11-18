import React from 'react';
import { withRestaurants, restaurantProviderProps } from '../RestaurantProvider/RestaurantProvider';

const RestaurantsList = ({ restaurantList, toggleActiveRestaurant, activeCost, activeRating, activeRestaurant }) => (
  <section className="restaurantList">
    <h2 className="listSubhead">Results</h2>
    <ul>
      {restaurantList.map((restaurant) => {
        const isCost = restaurant.price >= activeCost[0] && restaurant.price <= activeCost[1];
        const isRating = restaurant.rating >= activeRating[0] && restaurant.rating <= activeRating[1];
        const isActive = activeRestaurant.id === restaurant.id ? 'active' : '';
        return (isCost && isRating) && (
          <li
            key={restaurant.id}
            onClick={() => toggleActiveRestaurant(restaurant)}
            className={isActive}
          >{restaurant.name}</li>
        );
      })}
    </ul>
  </section>
);

RestaurantsList.propTypes = {
  ...restaurantProviderProps,
};

export default withRestaurants(RestaurantsList);
