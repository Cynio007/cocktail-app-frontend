import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FindDrink } from "../FindDrink/FindDrink";
import { UserContext } from "../../context/user-context";

import "./Header.css";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";

export const Header = () => {
  const { isLoggedIn } = useContext(UserContext);

  // const fontOfLink = ({ isActive }: { isActive: boolean }) => ({
  //   fontSize: isActive ? "140%" : "",
  // });

  const visability = () => ({
    display: isLoggedIn ? "inline" : "none",
  });

  const revVisability = () => ({
    display: isLoggedIn ? "none" : "inline",
  });

  const handleClick = () => {
    console.log("kliknięto");
    return window.scrollTo({ top: 300, behavior: "smooth" });
  };

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
              <Nav.Link
              // onClick={handleClick}
              >
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
                  // onClick={handleClick}
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
      {/* <h1 className="title">Cocktail App</h1>
      <nav className="navbar  navbar-light bg-dark justify-content-between">
      
        <p className="nav-item nav-link active">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            style={revVisability}
            to={"/Login"}
          >
            Log in
          </NavLink>
        </p>
        <p className="nav-item nav-link active">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            
            to={"/RandomDrink"}
          >
            Random Drink
          </NavLink>
        </p>
        <p className="nav-item nav-link active">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            style={revVisability}
            to={"/Registration"}
          >
            Sign up
          </NavLink>
        </p>
        <p className="nav-item nav-link active">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            style={visability}
            to={"/UserList"}
          >
            User List
          </NavLink>
        </p>
        <p className="nav-item nav-link active">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            style={visability}
            to={"/Logout"}
          >
            Log Out
          </NavLink>
        </p>

        <FindDrink />

       
      </nav>
      <hr /> */}
    </>
  );
};
