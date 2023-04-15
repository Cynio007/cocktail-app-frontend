import React, { useEffect, useState } from "react";
import { RandomDrinkEntity } from "../../types/randomDrink";
import { RandomDrinkTable } from "./random-drink-table";

// interface Props {
//   drink: RandomDrinkEntity;
// }

export const RandomDrink = () => {
  const [randomDrink, setRandomDrink] = useState<RandomDrinkEntity | null>(
    null
  );

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
  }, []);

  if (randomDrink === null) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h2>Random Drink</h2>

      <RandomDrinkTable drink={randomDrink} />
    </>
  );
};
