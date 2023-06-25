import React, { useEffect, useState } from "react";
import { SingleDrinkTable } from "../RandomDrink/single-drink-table";
import { SingleDrinkEntity } from "../../types/singleDrink";
import { SingleDrinkFromMyList } from "../SingleDrinkFromMyList/single-drink-from-my-list";
import { SingleDrinkFromMyListEntity } from "../../types/singleDrinkFromMyList";

interface Props {
  drinksArr: SingleDrinkFromMyListEntity[];
  refresh: () => void;
}

export const DrinksList = (props: Props) => {
  return (
    <ul>
      {props.drinksArr.map((element) => (
        <li key={element.id}>
          <SingleDrinkFromMyList drink={element} refresh={props.refresh} />
        </li>
      ))}
    </ul>
  );
};
