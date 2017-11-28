import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Searchbar from './Searchbar'
import WeatherList from './WeatherList'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App container">
          <Searchbar />
          <WeatherList />
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(null, actions)(App)
