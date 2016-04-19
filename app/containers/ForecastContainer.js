import React, { Component } from 'react';
var Forecast = require('../components/Forecast');
var getForecast = require('../helpers/api').getForecast;

class ForecastContainer extends Component {
  constructor () {
    super ()
    this.state = {
      isLoading: true,
      forecastData: {},
    }
  }
  componentDidMount () {
    this.makeRequest(this.props.routeParams.city)
  }
  componentWillReceiveProps (nextProps) {
    this.makeRequest(nextProps.routeParams.city)
  }
  makeRequest (city) {
    getForecast(city)
      .then((forecastData) => {
        this.setState({
          isLoading: false,
          forecastData: forecastData
        });
      });
  }
  handleClick (weather) {
    this.context.router.push ({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        weather: weather
      }
    })
  }
  render () {
    return (
      <Forecast
        city={this.props.routeParams.city}
        isLoading={this.state.isLoading}
        forecastData={this.state.forecastData}
        handleClick={(weather) => this.handleClick(weather)}
      />

  )
  }
}

ForecastContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default ForecastContainer
