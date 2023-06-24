import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FindDrink } from "../FindDrink/FindDrink";

export const Header = () => {
  const fontOfLink = ({ isActive }: { isActive: boolean }) => ({
    fontSize: isActive ? "140%" : "",
  });

  return (
    <>
      <h1>Cocktail App</h1>
      Menu:
      <NavLink style={fontOfLink} to={"/Login"}>
        Switch Log in
      </NavLink>
      |
      <NavLink style={fontOfLink} to={"/RandomDrink"}>
        Switch to Random Drink
      </NavLink>
      |
      <NavLink style={fontOfLink} to={"/Registration"}>
        Switch to Sign up
      </NavLink>
      |
      <NavLink style={fontOfLink} to={"/UserList"}>
        Switch to User List
      </NavLink>
      <FindDrink />
      <hr />
    </>
  );
};
