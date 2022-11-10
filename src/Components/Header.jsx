import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar>
      <Nav className="me-auto">
        <NavLink to="/" end className="mx-2 btn">
          Home
        </NavLink>
        <NavLink to="post/add" className="mx-2 btn">
          Add Post
        </NavLink>
      </Nav>
    </Navbar>
  );
};

export default Header;
