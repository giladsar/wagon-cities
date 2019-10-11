const selectedCity = (cityClick) => {
  const city = cityClick;
  return {
    type: 'SELECT_CITY',
    payload: city
  };
};
export default selectedCity;
