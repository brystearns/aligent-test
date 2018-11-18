import React from 'react';
import { withRestaurants, restaurantProviderProps } from '../RestaurantProvider/RestaurantProvider';
import RangeSlider from '../shared/RangeSlider/RangeSlider';
import { RATING_LOWER_LIMIT, RATING_UPPER_LIMIT } from '../../constants/restaurantFilters.constants';

const RatingSlider = ({ activeRating, toggleRatingChange }) => (
  <div className="slider">
    <h2 className="listSubhead">Rating</h2>
    <RangeSlider
      minAndMaxRange={[RATING_LOWER_LIMIT, RATING_UPPER_LIMIT]}
      currentRangeValue={activeRating}
      onRangeChange={toggleRatingChange}
    />
    <div className="rangeDifference">
      <span className="listSubhead">1</span>
      <span className="listSubhead">5</span>
    </div>
  </div>
);

RatingSlider.propTypes = {
  ...restaurantProviderProps,
};

export default withRestaurants(RatingSlider);
