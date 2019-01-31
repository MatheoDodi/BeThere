import React from 'react'
import styled from 'styled-components'

const GridCard = ({ image, name, date, id, url, venue }) => (
  <GridCardLayout>
    <ImageContainer>
      <img src={image} />
    </ImageContainer>
    <h2>{name}</h2>
    <h3>{date}</h3>
    <p>{venue}</p>
  </GridCardLayout>
)

export default GridCard

const GridCardLayout = styled.div`
  height: 600px;
  background-color: white;
  border-radius: 10px;
`

const ImageContainer = styled.div`
  height: 35%;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`
