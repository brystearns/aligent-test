import React from 'react';
import PropTypes from 'prop-types';
import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';

const RangeSlider = ({ onRangeChange, minAndMaxRange, currentRangeValue }) => (
  <Range
    value={currentRangeValue}
    defaultValue={minAndMaxRange}
    min={minAndMaxRange[0]}
    max={minAndMaxRange[1]}
    onChange={onRangeChange}
    allowCross={false}
  />
);

RangeSlider.propTypes = {
  minAndMaxRange: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  currentRangeValue: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  onRangeChange: PropTypes.func.isRequired,
};

export default RangeSlider;
