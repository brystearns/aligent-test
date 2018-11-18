import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRestaurants } from '../RestaurantProvider/RestaurantProvider';

const ActiveRestaurant = ({ activeRestaurant }) => {
  const {
    name,
    hasDelivery,
    hasBooking,
    cuisines,
    address,
    image,
    isOpen,
    phone,
  } = activeRestaurant;
  return (
    <section className="activeRestaurant">
      {Object.keys(activeRestaurant).length !== 0 ? (
        <Fragment>
          <div className="featuredImage">
            <img src={image} alt={name} />
          </div>
          <div className="restaurantInfo">
            <h1 className="name">{name}</h1>
            <h3 className="address">{address}</h3>

            {hasBooking ? (
              <p className="hasItem">Bookings available</p>
            ) : (
              <p className="hasItem">No bookings</p>
            )}

            {hasDelivery ? (
              <p className="hasItem">Delivery available</p>
            ) : (
              <p className="noItem">No delivery</p>
            )}

            <span className="activeSubhead listSubhead">Cuisines</span>
            <h4>{cuisines}</h4>

            {phone && (
              <Fragment>
                <span className="activeSubhead listSubhead">Phone number</span>
                <h4>{phone}</h4>
              </Fragment>
            )}

            <span className="activeSubhead listSubhead">Opening hours</span>
            {isOpen ? (
              <h4 className="isOpen">Open now</h4>
            ) : (
              <h4 className="notOpen">Closed now</h4>
            )}
          </div>
        </Fragment>
      ) : (
        <h1>Select a restaurant</h1>
      )}
    </section>
  );
};

ActiveRestaurant.propTypes = {
  activeRestaurant: PropTypes.shape({}).isRequired,
};

export default withRestaurants(ActiveRestaurant);
