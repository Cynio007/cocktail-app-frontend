import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FindDrink } from "../FindDrink/FindDrink";
import { UserContext } from "../../context/user-context";

import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  const { isLoggedIn } = useContext(UserContext);

  const visability = () => ({
    display: isLoggedIn ? "inline" : "none",
  });

  const revVisability = () => ({
    display: isLoggedIn ? "none" : "inline",
  });

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary bg-dark" sticky="top">
        <Container fluid>
          <Navbar.Brand>
            <NavLink to={"/home"} id="navBrand">
              Cocktail App
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  style={revVisability}
                  to={"/Login"}
                  id="navLink"
                >
                  Log in
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  to={"/RandomDrink"}
                  id="navLink"
                >
                  Random Drink
                </NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  style={revVisability}
                  to={"/Registration"}
                  id="navLink"
                >
                  Sign up
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  style={visability}
                  to={"/UserList"}
                  id="navLink"
                >
                  User List
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  style={visability}
                  to={"/Logout"}
                  id="navLink"
                >
                  Log Out
                </NavLink>
              </Nav.Link>
            </Nav>
            <FindDrink />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="banner"></div>
      <hr />
    </>
  );
};
