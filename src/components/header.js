import React from 'react'
import styled from 'styled-components'

const Header = ({ siteTitle }) => (
  <Navbar>
    <NavLogo>
      <span>Be</span>There
    </NavLogo>
    <NavbarList>
      <li>Home</li>
      <li>Calendar</li>
    </NavbarList>
  </Navbar>
)

const Navbar = styled.nav`
  width: 100%;
  background: transparent;
  color: red;
  display: flex;
`

const NavLogo = styled.h2`
  color: #d9e2ec;
  margin-right: auto;
  font-weight: 700;
  span {
    color: #0f609b;
    font-weight: 500;
  }
`

const NavbarList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;

  li {
  }
`

export default Header
