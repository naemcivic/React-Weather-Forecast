var React = require('react');
var utils = require('../helpers/utils');
var DayItem = require('./DayItem');
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

function Detail (props) {
  return (
    <div style={styles.container}>
      <DayItem day={props.forecast} />
      <div style={styles.descriptionContainer}>
        <p>{props.city}</p>
        <p>{props.forecast.weather[0].description}</p>
        <p>min temp: {convertTemp(props.forecast.temp.min)} degrees</p>
        <p>max temp: {convertTemp(props.forecast.temp.max)} degrees</p>
        <p>humidity: {props.forecast.humidity}</p>
      </div>
    </div>
  )
}

module.exports = Detail;
