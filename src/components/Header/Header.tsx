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
      <NavLink style={fontOfLink} to={"/Test"}>
        Switch to Test
      </NavLink>
      |
      <NavLink style={fontOfLink} to={"/RandomDrink"}>
        Switch to Random Drink
      </NavLink>
      <FindDrink />
      <hr />
    </>
  );
};
