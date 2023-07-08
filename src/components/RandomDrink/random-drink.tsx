import React, { useEffect, useState } from "react";
import { SingleDrinkEntity } from "../../types/singleDrink";
import { SingleDrinkTable } from "./single-drink-table";
import { AddDrinkBtn } from "../AddDrinkBtn/add-drink-btn";
import { NextDrinkBtn } from "../NextDrinkBtn/next-drink-btn";
import "./random-drink.css";
import { ScrollRestoration } from "react-router-dom";
import { Spinner } from "../common/spinner/Spinner";
import { Footer } from "../common/footer/Footer";

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

  // const handleClickScroll = () => {
  //   window.scrollTo({ top: 300, behavior: "smooth" });
  // };

  useEffect(() => {
    // handleClickScroll();
    // window.scrollTo({ top: 300, left: 0, behavior: "smooth" });
    (async () => {
      const res = await fetch("http://localhost:3001/drink");
      const data = await res.json();
      setRandomDrink(data);
      console.log("random drin:", data);
    })();
  }, [next]);
  useEffect(() => {
    // 👇️ scroll to top on page load

    window.scrollTo({ top: 200, left: 0, behavior: "smooth" });
    console.log("kliknięto effect");
  }, [randomDrink]);

  if (randomDrink === null) {
    // return <p>Loading...</p>;
    return <Spinner />;
  }

  return (
    <>
      <h2 className="random">Random Drink</h2>
      <div className="container-btn">
        <AddDrinkBtn drink={randomDrink} />
        <NextDrinkBtn nextDrink={nextDrink} />
      </div>
      <SingleDrinkTable drink={randomDrink} />
      <Footer />
    </>
  );
};
