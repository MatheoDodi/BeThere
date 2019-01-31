import React, { Component, createContext } from 'react'
import styled from 'styled-components'

import Dropdown from './dropwdown'
import { getEventsByCityAndZipCode } from '../../util/API'

class Search extends Component {
  state = {
    openStates: false,
    isCityFocused: false,
    isStateFocused: false,
    cityInputValue: '',
    stateInputValue: '',
  }

  handleFormSubmit = async e => {
    const { cityInputValue: city, stateInputValue: state } = this.state
    e.preventDefault()
    const response = await getEventsByCityAndZipCode(city, state)
    const eventData = response.data
    this.props.setEvents(eventData)
  }

  handleInputChange = (e, inputType) =>
    this.setState({ [inputType]: e.target.value })

  handleSelectState = state => this.setState({ stateInputValue: state })

  handleInputFocus = inputType => this.setState({ [inputType]: true })

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <CityInputContainer inputFocused={this.state.isCityFocused}>
          <CityInput
            autoComplete="off"
            onChange={e => this.handleInputChange(e, 'cityInputValue')}
            value={this.state.cityInputValue}
            onClick={() => this.handleInputFocus('isCityFocused')}
            id="city"
            type="text"
          />
          <CityInputLabel
            inputFocused={this.state.isCityFocused}
            htmlFor="city"
          >
            Enter Your City
          </CityInputLabel>
        </CityInputContainer>
        <Dropdown
          stateFocus={this.state.isStateFocused}
          handleStateFocus={() => this.handleInputFocus('isStateFocused')}
          stateValue={this.state.stateInputValue}
          handleInputChange={e => this.handleInputChange(e, 'stateInputValue')}
          selectState={state => this.handleSelectState(state)}
        />
        <button>Search</button>
      </Form>
    )
  }
}

const Form = styled.form`
  display: flex;
  align-items: center;
  padding: 2.5rem 6rem 2rem 6rem;
  width: 50%;
  border-radius: 15px;
  background: #f0f4f8;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  top: -5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
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
