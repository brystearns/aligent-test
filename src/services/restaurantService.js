import Promise from 'bluebird';
import axios from 'axios';
import { API_KEY, API_ROOT_URL, CITY_ID } from '../constants/api.constants';

const transformRestaurants = restaurants => restaurants.map(({ restaurant }) => ({
  id: restaurant.id,
  name: restaurant.name,
  hasDelivery: restaurant.has_online_delivery,
  hasBooking: restaurant.has_table_booking,
  cuisines: restaurant.cuisines,
  address: restaurant.location.address,
  image: restaurant.featured_image,
  price: restaurant.price_range,
  rating: Number(restaurant.user_rating.aggregate_rating),
  isOpen: restaurant.is_delivering_now,
  phone: restaurant.phone_numbers,
}));

const transformCategories = ({ categories }) => categories.map(({ categories }) => ({
  id: categories.id,
  name: categories.name,
}));

const transformCuisines = ({ cuisines }) => cuisines.map(({ cuisine }) => ({
  id: cuisine.cuisine_id,
  name: cuisine.cuisine_name,
}));

function addCuisinesAndCategories(cuisines = [], categories = []) {
  let cuisinesAndCategories = '';
  if (cuisines.length) {
    cuisinesAndCategories += '&cuisines=';
    cuisines.map((cuisine, index) => cuisinesAndCategories += `${index > 0 ? ',' : ''}${cuisine}`);
  }
  if (categories.length) {
    cuisinesAndCategories += '&category=';
    categories.map((category, index) => cuisinesAndCategories += `${index > 0 ? ',' : ''}${category}`);
  }
  return cuisinesAndCategories;
}

export async function getListOfRestaurants(cuisines, categories) {
  const restaurants = await Promise.map([1,21,41,61,81], index => axios(
    `${API_ROOT_URL}search?entity_type=city&entity_id=${CITY_ID}&start=${index}${addCuisinesAndCategories(cuisines, categories)}`,
    { headers: { 'user-key': API_KEY } },
  ).then(response => response.data.restaurants))
    .then(([first, second, third, fourth, fifth]) => first.concat(second, third, fourth, fifth));
  return transformRestaurants(restaurants);
}

export async function getCategories() {
  const categories = await axios(`${API_ROOT_URL}categories?city_id=${CITY_ID}`, {
    headers: { 'user-key': API_KEY }
  });
  return transformCategories(categories.data);
}

export async function getCuisines() {
  const cuisines = await axios(`${API_ROOT_URL}cuisines?city_id=${CITY_ID}`, {
    headers: { 'user-key': API_KEY }
  });
  return transformCuisines(cuisines.data);
}
