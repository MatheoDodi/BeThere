import React, { Component } from 'react'
import styled from 'styled-components'

class Search extends Component {
  render() {
    return (
      <Form>
        <input type="text" />
        <button>Search</button>
      </Form>
    )
  }
}

const Form = styled.form`
  margin: 0 auto;
  position: relative;
  z-index: 10;
  top: -10px;
`

export default Search
