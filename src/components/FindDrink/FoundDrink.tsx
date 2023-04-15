import React, { useEffect, useState } from "react";
import { RandomDrinkEntity } from "../../types/randomDrink";
import { useParams } from "react-router-dom";
import { RandomDrinkTable } from "../RandomDrink/random-drink-table";
import { badResponse } from "../../types/badResponse";
import { DrinkNotFoundView } from "../../views/DrinkNotFoundView";

// interface Props {
//   drink: RandomDrinkEntity;
// }
export const FoundDrink = () => {
  let { name } = useParams();
  let nameOfDrink = "";
  if (typeof name === "string") {
    nameOfDrink = decodeURIComponent(name); // skrócić
  }
  const [foundDrink, setFoundDrink] = useState<
    RandomDrinkEntity | null | badResponse
  >(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3001/drink/${nameOfDrink}`);
      const data = await res.json();
      setFoundDrink(data);
      console.log("znaleziony drin:", data);
    })();
  }, [name]);

  if (foundDrink === null) {
    return <p>Loading...</p>;
  }

  if (foundDrink.hasOwnProperty("isSuccess")) {
    return <DrinkNotFoundView />;
  }

  return (
    <>
      <h2>Founded drink:</h2>
      <RandomDrinkTable drink={foundDrink as RandomDrinkEntity} />
    </>
  );
};
