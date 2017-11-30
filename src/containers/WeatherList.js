import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Chart from '../components/chart'
import GoogleMap from '../components/react-googlemaps'

const TD = styled.td`
  vertical-align: middle!important;
  text-align: center!important;
`

const TH = TD.withComponent('th')

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = (cityData.list.map(weather => weather.main.temp)).map(temp => temp * 9/5 - 459.67)
    const pressure = cityData.list.map(weather => weather.main.pressure)
    const humidity = cityData.list.map(weather => weather.main.humidity)
    const { lon, lat } = cityData.city.coord

    return (
      <tr key={name}>
        <TD>
          <GoogleMap
            isMarkerShown
            googleMapURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDu6DGpVI2hN1pYStvEDikXdfjZEF7YQao&v=3.exp&libraries=geometry,drawing,places"
            loadingElement = { <div style={{ height: `100%` }} /> }
            containerElement = { <div style={{ height: `200px` }} /> }
            mapElement = { <div style={{ height: `100%` }} /> }
            lat = {lat}
            lng = {lon}
          />        
        </TD>
        <TD><Chart data={temps} color="blue" units="F" /></TD>
        <TD><Chart data={pressure} color="red" units="hPa" /></TD>
        <TD><Chart data={humidity} color="green" units="%" /></TD> 
      </tr>
    )
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <TH>City</TH>
            <TH>Temp</TH>
            <TH>Pressure</TH>
            <TH>Humidity</TH>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
