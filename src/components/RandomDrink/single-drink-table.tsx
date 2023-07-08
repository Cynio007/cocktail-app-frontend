import React from "react";
import { SingleDrinkEntity } from "../../types/singleDrink";
import Table from "react-bootstrap/Table";
import "./random-drink.css";

interface Props {
  drink: SingleDrinkEntity;
}

export const SingleDrinkTable = (props: Props) => {
  return (
    <>
      <div className="container-table">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className="th">Name:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td">{props.drink.name}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th className="th">Type:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td">{props.drink.alcoholic}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th className="th">Ingredients:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td">{props.drink.ingredients.join(", ")}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th className="th">Instructions:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td">{props.drink.instruction}</td>
            </tr>
          </tbody>
        </Table>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className="th">Photo:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td">
                <img src={props.drink.img} alt={props.drink.name}></img>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};
