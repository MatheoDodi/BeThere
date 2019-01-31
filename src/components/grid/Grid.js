import React from 'react'
import styled from 'styled-components'
import GridCard from './GridCard'

const Grid = ({ events }) => {
  console.log(events)
  return (
    <GridArea>
      {events.map(event => {
        const image = event.images[0].url
        const name = event.name
        const date = event.dates.start.localTime
        const id = event.id
        const url = event.url
        const venue = event._embedded.venues[0].name

        return (
          <GridCard
            image={image}
            name={name}
            date={date}
            id={id}
            url={url}
            venue={venue}
            key={id}
          />
        )
      })}
    </GridArea>
  )
}

const GridArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 2rem;
`

export default Grid
