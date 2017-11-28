import axios from 'axios'
import { FETCH_WEATHER } from './types'

const API_KEY = 'd3beaf0179c14b0347f4ffbd979b7469'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const fetchWeather = (city) => async dispatch => {
  const res = await axios.get(`${ROOT_URL}&q=${city},us`)
  console.log('res', res)
  
  dispatch({
    type: FETCH_WEATHER,
    payload: res.data
  })
}
