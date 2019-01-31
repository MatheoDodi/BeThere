import axios from 'axios'

const API_KEY = `AQ9cGkZhRDNDZWz9cjEMb2U664aDHhtO`

function getEventsByCityAndZipCode(city, zip) {
  axios
    .get(
      `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&countryCode=US&stateCode=CA&city=irvine&sort=date,asc&apikey=AQ9cGkZhRDNDZWz9cjEMb2U664aDHhtO`
    )
    .then(res => {
      const { events } = res.data._embedded
      console.log(events)
    })
    .catch(err => console.log(err))
}
