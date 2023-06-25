import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FindDrink } from "../FindDrink/FindDrink";
import { UserContext } from "../../context/user-context";

import "./Header.css";

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

  return (
    <>
      <h1>Cocktail App</h1>
      Menu:
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        style={revVisability}
        to={"/Login"}
      >
        Switch Log in
      </NavLink>
      |
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        // style={fontOfLink}
        to={"/RandomDrink"}
      >
        Switch to Random Drink
      </NavLink>
      |
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        style={revVisability}
        to={"/Registration"}
      >
        Switch to Sign up
      </NavLink>
      |
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        style={visability}
        to={"/UserList"}
      >
        Switch to User List
      </NavLink>
      |
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        style={visability}
        to={"/Logout"}
      >
        Switch to Log Out
      </NavLink>
      <FindDrink />
      <hr />
    </>
  );
};
