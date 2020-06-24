import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../resources/icon.jpeg";
import styled from "styled-components";

const NavWrapper = styled.nav`
  background: var(--mainPurple);
  img {
    height: 50px;
    width: 50px;
    border-radius: 40%;
  }
  .brand {
    font-family: shadows;
    color: white;
    font-size: 1.3rem;
    :hover {
      text-decoration: none;
    }
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm px-sm-5">
        <LinkStyled to="./">
          <img
            src={logo}
            alt="Home"
            className="navbar-brand"
            data-toggle="tooltip"
            title="Home"
          />
          <span className="brand">SoyNutri</span>
        </LinkStyled>
        <ul className="navbar-nav align-center">
          <li className="nav-item ml-4">
            <Link to="/" className="nav-link text-white">
              Inicio
            </Link>
          </li>
        </ul>
      </NavWrapper>
    );
  }
}
