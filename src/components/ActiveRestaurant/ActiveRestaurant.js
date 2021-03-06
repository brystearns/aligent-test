import React, { Fragment } from 'react';
import { withRestaurants, restaurantProviderProps } from '../RestaurantProvider/RestaurantProvider';

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
      {Object.keys(activeRestaurant).length === 0 ? (
        <h1 className="selectRestaurant">Select a restaurant</h1>
      ) : (
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
              <p className="noItem">No bookings</p>
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
      )}
    </section>
  );
};

ActiveRestaurant.propTypes = {
  ...restaurantProviderProps,
};

export default withRestaurants(ActiveRestaurant);
