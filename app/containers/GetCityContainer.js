import React, { Component, PropTypes } from 'react'
import GetCity from '../components/GetCity'

class GetCityContainer extends Component  {
  constructor () {
    super ()
    this.state = {
      city: ''
    }
  }
  handleSubmitCity (e) {
    // console.log(this.context.router);
    // console.log(this.state.city);
    e.preventDefault()
    this.context.router.push('/forecast/' + this.state.city);
  }
  handleUpdateCity (e) {
    this.setState({
      city: e.target.value
    })
  }
  render () {
    return (
      <GetCity
        direction={this.props.direction}
        onSubmitCity={(e) => this.handleSubmitCity(e)}
        onUpdateCity={(e) => this.handleUpdateCity(e)}
        city={this.state.city} />
    )
  }
}

GetCityContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

GetCityContainer.DefaultProps = {
  direction: 'column'
}

GetCityContainer.propTypes = {
  direction: PropTypes.string
}

export default GetCityContainer
