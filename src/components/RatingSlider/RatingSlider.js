import React from 'react';
import PropTypes from 'prop-types';
import { withRestaurants } from '../RestaurantProvider/RestaurantProvider';
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
      <span className="listSubhead">$</span>
      <span className="listSubhead">$$$$</span>
    </div>
  </div>
);

RatingSlider.propTypes = {
  activeRating: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  toggleRatingChange: PropTypes.func.isRequired,
};

export default withRestaurants(RatingSlider);
