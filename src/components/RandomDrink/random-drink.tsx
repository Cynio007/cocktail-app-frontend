import React, { useEffect, useState } from "react";
import { SingleDrinkEntity } from "../../types/singleDrink";
import { SingleDrinkTable } from "./single-drink-table";
import { AddDrinkBtn } from "../AddDrinkBtn/add-drink-btn";
import { NextDrinkBtn } from "../NextDrinkBtn/next-drink-btn";
import { Spinner } from "../common/spinner/Spinner";
import { Footer } from "../common/footer/Footer";
import "./random-drink.css";

export const RandomDrink = () => {
  const [randomDrink, setRandomDrink] = useState<SingleDrinkEntity | null>(
    null
  );
  const [next, setNext] = useState<boolean>(false);

  const nextDrink = () => {
    setNext((next) => !next);
  };

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3001/drink");
      const data = await res.json();
      setRandomDrink(data);
    })();
  }, [next]);

  useEffect(() => {
    window.scrollTo({ top: 200, left: 0, behavior: "smooth" });
  }, [randomDrink]);

  if (randomDrink === null) {
    return <Spinner />;
  }

  return (
    <>
      <h2 className="random">Random Drink:</h2>
      <div className="container-btn">
        <AddDrinkBtn drink={randomDrink} />
        <NextDrinkBtn nextDrink={nextDrink} />
      </div>
      <SingleDrinkTable drink={randomDrink} />
      <Footer />
    </>
  );
};
