import axios from 'axios'

const API_KEY = `AQ9cGkZhRDNDZWz9cjEMb2U664aDHhtO`

export function getEventsByCityAndZipCode(city, zip) {
  return axios.get(
    `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&stateCode=${zip}&city=${city}&sort=date,asc&apikey=${API_KEY}`
  )
}
