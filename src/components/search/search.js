import React, { Component } from 'react'
import styled from 'styled-components'

import Dropdown from './dropwdown'

class Search extends Component {
  state = {
    openStates: false,
    isFocused: false,
  }

  handleStatesBox = () =>
    this.setState(prevState => ({ openStates: !prevState.openStates }))

  handleInputFocus = () => this.setState({ isFocused: true })

  render() {
    return (
      <Form>
        <CityInputContainer inputFocused={this.state.isFocused}>
          <CityInput
            onClick={this.handleInputFocus}
            id="city"
            type="text"
            placeholder=" "
          />
          <CityInputLabel inputFocused={this.state.isFocused} htmlFor="city">
            Enter Your City
          </CityInputLabel>
        </CityInputContainer>
        <Dropdown
          showStates={this.state.openStates}
          openStatesBox={this.handleStatesBox}
        />
        <button>Search</button>
      </Form>
    )
  }
}

const Form = styled.form`
  padding: 4rem 6rem;
  width: 50%;
  border-radius: 15px;
  background: #f0f4f8;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  top: -6rem;
  box-shadow: 0 8px 12px 5px rgba(0, 62, 107, 0.15);
`

const CityInputContainer = styled.div`
  width: 60%;
  display: inline-block;
  position: relative;
  margin-right: 1rem;
  &::before {
    content: '';
    border-radius: 25%;
    height: 3px;
    width: ${({ inputFocused }) => (inputFocused ? '100%' : '0')};
    display: block;
    position: absolute;
    bottom: 0;
    background-color: #186faf;
    transition: all 0.3s;
  }
`

const CityInputLabel = styled.label`
  cursor: text;
  font-size: 1rem;
  color: #bcccdc;
  position: absolute;
  left: 0.45rem;
  top: 1rem;
  font-weight: 300;
  transition: all 0.3s;
  transform: ${({ inputFocused }) => inputFocused && 'translateY(-2.8rem)'};
`

const CityInput = styled.input`
  background-color: transparent;
  border-style: none;
  border-bottom: 3px solid #bcccdc;
  padding: 0.75rem 0.45rem;
  width: 100%;
  font-size: 1.4rem;
  outline: none;
  color: #243b53;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export default Search
