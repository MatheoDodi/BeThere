import React from 'react'
import styled from 'styled-components'

const Header = ({ siteTitle }) => (
  <Navbar>
    <NavLogo>
      <span>Be</span>There
      <div className="square" />
    </NavLogo>
    <NavbarListIcon>
      <span> </span>
    </NavbarListIcon>
  </Navbar>
)

const Navbar = styled.nav`
  position: fixed;
  padding: 0.5rem 1rem;
  width: 100%;
  background: transparent;
  color: red;
  display: flex;
  align-items: center;
`

const NavLogo = styled.h2`
  position: relative;
  font-size: 2rem;
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
    height: 7px;
    width: 7px;
    background: #f7c948;
    transform: translateY(2px);
  }
`

const NavbarListIcon = styled.div`
  background: linear-gradient(to right bottom, #fadb5f, #f7c948);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: auto;
  position: relative;

  span {
    border-radius: 25%;
    display: block;
    width: 25px;
    height: 3px;
    background-color: #0f609b;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &::after,
    &::before {
      content: '';
      border-radius: 25%;
      height: 3px;
      width: 25px;
      display: block;
      position: absolute;
      background-color: #0f609b;
    }

    &::after {
      top: 8px;
    }

    &::before {
      top: -8px;
    }
  }
`

export default Header
