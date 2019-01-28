import React, { Component } from 'react'
import styled from 'styled-components'

import Dropdown from './dropwdown'

class Search extends Component {
  state = {
    openStates: false,
  }

  render() {
    return (
      <Form>
        <CityInput type="text" placeholder=" " />
        <StateInput onClick={() => this.setState({ openStates: true })} />
        {this.state.openStates && <Dropdown open={this.state.openStates} />}
        <button>Search</button>
      </Form>
    )
  }
}

const Form = styled.form`
  padding: 4rem 6rem;
  width: 40%;
  border-radius: 15px;
  background: #f0f4f8;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  top: -5.25rem;
  box-shadow: 0 8px 12px 5px rgba(0, 62, 107, 0.15);
`

const CityInput = styled.input`
  background-color: #bcccdc;
  border-style: none;
  border-radius: 5px;
`
const StateInput = styled.input`
  background-color: #bcccdc;
  border-style: none;
  border-radius: 5px;
`

export default Search
