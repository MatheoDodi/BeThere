import React from 'react'
import styled from 'styled-components'
import { states } from '../../util/states'

export const Dropdown = () => (
  <DropdownBox style={{ width: '200px' }} id="states">
    <div>
      {states.map(state => (
        <span key={state}>{state}</span>
      ))}
    </div>
  </DropdownBox>
)

const DropdownBox = styled.div`
  background: red;
  position: relative;

  div {
    position: absolute;
    height: 200px;
    background: gray;
    overflow-y: scroll;
    top: 10px;
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

export default Dropdown
