import React from 'react';
import './Country.css'
const Country = (props) => {
  console.log(props.country.name)
  const {name,area,population,flags} = props.country;

  return (
    <div className='country bg-warning'>
      <h1>Country Name: {name.common}</h1>
      <img src={flags.png} alt="" />
      <h3><small>Area: {area} </small></h3>
      <h4><small>Population: {population} </small></h4>
    </div>
  );
};

export default Country;