import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";

const Header = () => {
  const { user, logOut } = useFirebase();

  const navMenu = {
    textDecoration: "none",
    color: "#fff",
    margin: "0px 15px",
    fontWeight: "500",
    textAlign: "center",
    textTransform: "capitalize",
  };

  const navbar = {
    backgroundColor: "#2e7d32",
    color: "#fff",
    fontWeight: 700,
    fontSize: 20,
  };
  return (
    <div>
      <Navbar
        style={navbar}
        bg=""
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">Travel Zone</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav.Link>
              <NavLink to="/home" style={navMenu}>
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/packages" style={navMenu}>
                Travel Packages
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/booking" style={navMenu}>
                Bookings
              </NavLink>
            </Nav.Link>
            {(user?.email || user?.displayName) && (
              <Nav.Link>
                <NavLink to="/addPackage" style={navMenu}>
                  Add Package
                </NavLink>
              </Nav.Link>
            )}
            {user?.email || user?.displayName ? (
              <Button onClick={logOut} variant="light">
                Logout
              </Button>
            ) : (
              <Nav.Link>
                <NavLink to="/login" style={navMenu}>
                  Login
                </NavLink>
              </Nav.Link>
            )}

            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
