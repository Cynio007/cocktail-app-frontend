import React, { useEffect, useState } from "react";
import { SingleDrinkEntity } from "../../types/singleDrink";
import { useParams } from "react-router-dom";
import { SingleDrinkTable } from "../RandomDrink/single-drink-table";
import { badResponse } from "../../types/badResponse";
import { DrinkNotFoundView } from "../../views/DrinkNotFoundView";
import { AddDrinkBtn } from "../AddDrinkBtn/add-drink-btn";
import { Footer } from "../common/footer/Footer";
import { Spinner } from "../common/spinner/Spinner";
import "./FoundDrink.css";

export const FoundDrink = () => {
  let { name } = useParams();
  let nameOfDrink = "";
  if (typeof name === "string") {
    nameOfDrink = decodeURIComponent(name);
  }
  const [foundDrink, setFoundDrink] = useState<
    SingleDrinkEntity | null | badResponse
  >(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3001/drink/${nameOfDrink}`);
      const data = await res.json();
      setFoundDrink(data);
    })();
  }, [name]);

  useEffect(() => {
    window.scrollTo({ top: 250, left: 0, behavior: "smooth" });
  }, [foundDrink]);

  if (foundDrink === null) {
    return <Spinner />;
  }

  if (foundDrink.hasOwnProperty("isSuccess")) {
    return <DrinkNotFoundView />;
  }

  return (
    <>
      <h2 className="founded">Founded drink:</h2>
      <div className="container-btn">
        <AddDrinkBtn drink={foundDrink as SingleDrinkEntity} />
      </div>
      <SingleDrinkTable drink={foundDrink as SingleDrinkEntity} />
      <Footer />
    </>
  );
};
