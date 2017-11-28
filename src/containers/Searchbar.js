import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

import { fetchWeather } from '../actions'

const Form = styled.form`
  margin: 20px 0px;
`

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }

  }

  onInputChange = e => this.setState({ term: e.target.value })

  onFormSubmit = e => {
    e.preventDefault()

    //fetch weather data
    this.props.fetchWeather(this.state.term)
    this.setState({ term: '' })
  }

  render () {
    return (
      <Form 
        className="input-group"
        onSubmit={(e) => this.onFormSubmit(e)}>
        <input 
          placeholder="Get a 5 day forecast in your city"
          className="form-control"
          value={this.state.term}
          onChange={(e) => this.onInputChange(e)}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </Form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)