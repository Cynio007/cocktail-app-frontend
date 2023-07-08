import React, { useEffect, useState } from "react";
import { SingleDrinkEntity } from "../../types/singleDrink";
import { useParams } from "react-router-dom";
import { SingleDrinkTable } from "../RandomDrink/single-drink-table";
import { badResponse } from "../../types/badResponse";
import { DrinkNotFoundView } from "../../views/DrinkNotFoundView";
import { AddDrinkBtn } from "../AddDrinkBtn/add-drink-btn";
import "./FoundDrink.css";
import { Footer } from "../common/footer/Footer";

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
    SingleDrinkEntity | null | badResponse
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
      <h2 className="founded">Founded drink</h2>
      <div className="container-btn">
        <AddDrinkBtn drink={foundDrink as SingleDrinkEntity} />
      </div>
      <SingleDrinkTable drink={foundDrink as SingleDrinkEntity} />
      <Footer />
    </>
  );
};
