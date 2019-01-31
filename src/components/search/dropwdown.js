import React from 'react'
import styled from 'styled-components'
import { states } from '../../util/states'

export const Dropdown = ({
  stateFocus,
  handleStateFocus,
  stateValue,
  handleInputChange,
  selectState,
}) => (
  <DropdownDiv stateFocus={stateFocus}>
    <StateInput
      onMouseEnter={handleStateFocus}
      onClick={handleStateFocus}
      autoComplete="off"
      id="state"
      type="text"
      value={stateValue}
      onChange={handleInputChange}
    />
    <StateInputLabel stateFocus={stateFocus} htmlFor="state">
      State
    </StateInputLabel>
    <DropdownContent className="content">
      {states.map(state => (
        <span onClick={() => selectState(state)} key={state}>
          {state}
        </span>
      ))}
    </DropdownContent>
  </DropdownDiv>
)

const DropdownDiv = styled.div`
  position: relative;
  display: inline-block;
  width: 100px;

  &::before {
    content: '';
    border-radius: 25%;
    width: 0;
    height: 3px;
    display: block;
    position: absolute;
    bottom: 0;
    background-color: #186faf;
    transition: all 0.3s;
    width: ${({ stateFocus }) => (stateFocus ? '100%' : 0)};
  }

  &:hover .content {
    display: block;
    height: 200px;
  }
`

const StateInput = styled.input`
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

const StateInputLabel = styled.label`
  cursor: text;
  font-size: 1rem;
  color: #bcccdc;
  position: absolute;
  left: 0.45rem;
  top: 1rem;
  font-weight: 300;
  transition: all 0.3s;
  transform: ${({ stateFocus }) => stateFocus && 'translateY(-2.8rem)'};
`

const DropdownContent = styled.div`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100px;
  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  height: 0;
  overflow-y: scroll;
  transition: all 0.3s ease-in-out;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  span {
    display: block;
    padding: 12px 16px;

    &:hover {
      background-color: #bcccdc;
    }
  }
`

export default Dropdown
