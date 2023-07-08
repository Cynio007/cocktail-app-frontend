import React from "react";
import "./HomePage.css";
import { NavLink } from "react-router-dom";
import { Footer } from "../common/footer/Footer";

export const HomePage = () => (
  <>
    <h2 className="welcome">Welcome to Cocktil App!</h2>
    <br />
    <h3 className="welcome">
      Click{" "}
      <NavLink to={"/RandomDrink"} className={"to-random-link"}>
        Random Drink
      </NavLink>{" "}
      to search for a random cocktail!
    </h3>
    <h4 className="welcome">or</h4>
    <h3 className="welcome">Search for a specific drink by name!</h3>
    <br />
    <h3 className="welcome">
      After logging in, you can add a drink to your favorites list!
    </h3>
    <Footer />
  </>
);
