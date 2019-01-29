import React from 'react'
import styled from 'styled-components'
import { states } from '../../util/states'

export const Dropdown = ({ openStatesBox, showStates }) => (
  <DropdownBox id="states">
    <StateInput onClick={openStatesBox} />
    <div showStates={showStates}>
      {states.map(state => (
        <span key={state}>{state}</span>
      ))}
    </div>
  </DropdownBox>
)

const DropdownBox = styled.div`
  display: inline-block;
  background: red;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  div {
    position: absolute;
    height: 200px;
    overflow-y: scroll;
    height: ${({ showStates }) => (showStates ? '100px' : '0')};
    top: 25px;
    left: 0;

    &::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }

    span {
      display: block;
    }
  }
`

const DropdownPlaceholder = styled.div`
  height: 50px;
  width: 200px;
  background-color: #bcccdc;
`

const StateInput = styled.input`
  background-color: #bcccdc;
  border-style: none;
  border-radius: 5px;
  width: 50px;
`

export default Dropdown
