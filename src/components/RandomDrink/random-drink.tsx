import React, { useEffect, useState } from "react";
import { SingleDrinkEntity } from "../../types/singleDrink";
import { SingleDrinkTable } from "./single-drink-table";
import { AddDrinkBtn } from "../AddDrinkBtn/add-drink-btn";
import { NextDrinkBtn } from "../NextDrinkBtn/next-drink-btn";

// interface Props {
//   drink: RandomDrinkEntity;
// }

export const RandomDrink = () => {
  const [randomDrink, setRandomDrink] = useState<SingleDrinkEntity | null>(
    null
  );
  const [next, setNext] = useState<boolean>(false);

  const nextDrink = () => {
    setNext((next) => !next);
  };
  // if(props.drink !==null){
  //           setRandomDrink(props.drink);
  // return(
  //     <>
  //       <h2>Found Drink</h2>

  //       <RandomDrinkTable drink={randomDrink as RandomDrinkEntity} />
  //     </>
  // )
  // }

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3001/drink");
      const data = await res.json();
      setRandomDrink(data);
      console.log("random drin:", data);
    })();
  }, [next]);

  if (randomDrink === null) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h2>Random Drink</h2>
      <AddDrinkBtn drink={randomDrink} />
      <NextDrinkBtn nextDrink={nextDrink} />
      <SingleDrinkTable drink={randomDrink} />
    </>
  );
};
