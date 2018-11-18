import React from 'react';
import { withRestaurants, restaurantProviderProps } from '../RestaurantProvider/RestaurantProvider';
import RangeSlider from '../shared/RangeSlider/RangeSlider';
import { COST_LOWER_LIMIT, COST_UPPER_LIMIT } from '../../constants/restaurantFilters.constants';

const CostSlider = ({ activeCost, toggleCostChange }) => (
  <div className="slider">
    <h2 className="listSubhead">Cost</h2>
    <RangeSlider
      minAndMaxRange={[COST_LOWER_LIMIT, COST_UPPER_LIMIT]}
      currentRangeValue={activeCost}
      onRangeChange={toggleCostChange}
    />
    <div className="rangeDifference">
      <span className="listSubhead">$</span>
      <span className="listSubhead">$$$$</span>
    </div>
  </div>
);

CostSlider.propTypes = {
  ...restaurantProviderProps,
};

export default withRestaurants(CostSlider);
