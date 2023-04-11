import React, { useEffect, useState } from "react";
import { RandomDrinkEntity } from "../../types/randomDrink";
import { RandomDrinkTable } from "./random-drink-table";

export const RandomDrink = () => {
  const [randomDrink, setRandomDrink] = useState<RandomDrinkEntity | null>(
    null
  );

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3001/drink");
      const data = await res.json();
      setRandomDrink(data);
      console.log(data);
    })();
  }, []);

  if (randomDrink === null) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1>Random Drink</h1>

      <RandomDrinkTable drink={randomDrink} />
    </>
  );
};
