import React from 'react';
var utils = require('../helpers/utils');
import DayItem from './DayItem';
var convertTemp = utils.convertTemp;

var styles = {
  descriptionContainer: {
    fontSize: 34,
    fontWeight: 100,
    maxWidth: 400,
    margin: '0 auto',
    textAlign: 'center',
  }
}

function Detail ( { forecast, city } ) {
  return (
    <div style={styles.container}>
      <DayItem day={forecast} />
      <div style={styles.descriptionContainer}>
        <p>{city}</p>
        <p>{forecast.weather[0].description}</p>
        <p>min temp: {convertTemp(forecast.temp.min)} degrees</p>
        <p>max temp: {convertTemp(forecast.temp.max)} degrees</p>
        <p>humidity: {forecast.humidity}</p>
      </div>
    </div>
  )
}

export default Detail
