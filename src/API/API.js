import * as axios from "axios/index"

// https://belarusbank.by/api/kursExchange?city=%D0%92%D0%B8%D1%82%D0%B5%D0%B1%D1%81%D0%BA


export const getInfo = (city) => {
  return axios.get(`https://cors-anywhere.herokuapp.com/https://belarusbank.by/api/kursExchange?city=${city}`)
};