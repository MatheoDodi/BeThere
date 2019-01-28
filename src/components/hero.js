import React from 'react'
import styled from 'styled-components'

const Hero = props => (
  <HeroContainer>
    <div>
      <h1>
        <Logo>
          <span>Be</span>There
          <div className="square" />
        </Logo>{' '}
        or be square!
      </h1>
      <h3>What's Happing in your City</h3>
    </div>
  </HeroContainer>
)

export default Hero

const HeroContainer = styled.div`
  height: 75vh;
  width: 100%;
  background: linear-gradient(to right bottom, #0f609b, #003e6b);
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    h1 {
      font-size: 5rem;
      font-weight: 300;
      color: #d9e2ec;
      font-family: Roboto;
    }
    h3 {
      font-family: Roboto;
      color: #d9e2ec;
      font-weight: 300;
      text-align: center;
      font-size: 2rem;
    }
  }
`

const Logo = styled.span`
  display: inline-block;
  position: relative;
  font-size: 5rem;
  color: #f0f4f8;
  margin-right: auto;
  font-weight: 200;
  margin: 0;
  span {
    color: #f7c948;
    font-weight: 700;
  }
  .square {
    display: inline-block;
    height: 15px;
    width: 15px;
    background: #f7c948;
    transform: translateY(2px);
  }
`
