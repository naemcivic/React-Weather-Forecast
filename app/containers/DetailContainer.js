var React = require('react');
var Detail = require('../components/Detail');

var DetailContainer = React.createClass ({
  render: function () {
    // console.log(this.props.location.state.weather)
    return (
      <Detail
        forecast={this.props.location.state.weather}
        city={this.props.routeParams.city} />
    )
  }
});

module.exports = DetailContainer;
