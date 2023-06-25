import React from "react";
import { SingleDrinkEntity } from "../../types/singleDrink";

interface Props {
  drink: SingleDrinkEntity;
}

export const SingleDrinkTable = (props: Props) => (
  <>
    <table>
      <thead>
        <tr>
          <th>Id:</th>
          <th>Name:</th>
          <th>Alcoholic:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.drink.id} </td>
          <td>{props.drink.name}</td>
          <td>{props.drink.alcoholic}</td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <th>Ingredients:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.drink.ingredients.join(", ")}</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th>Instructions:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.drink.instruction}</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th>Photo:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={props.drink.img}></img>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);
