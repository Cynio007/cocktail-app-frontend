import React, { useEffect, useState } from "react";
import { SingleDrinkTable } from "../RandomDrink/single-drink-table";
import { SingleDrinkEntity } from "../../types/singleDrink";
import { SingleDrinkFromMyList } from "../SingleDrinkFromMyList/single-drink-from-my-list";
import { SingleDrinkFromMyListEntity } from "../../types/singleDrinkFromMyList";
import Accordion from "react-bootstrap/Accordion";
import "./DrinkList.css";

interface Props {
  drinksArr: SingleDrinkFromMyListEntity[];
  refresh: () => void;
}

export const DrinksList = (props: Props) => {
  return (
    // <ul>
    //   {props.drinksArr.map((element) => (
    //     <li key={element.id}>
    //       <SingleDrinkFromMyList drink={element} refresh={props.refresh} />
    //     </li>
    //   ))}
    // </ul>

    <Accordion defaultActiveKey={"0"}>
      {props.drinksArr.map((element, index) => (
        <>
          <Accordion.Item
            eventKey={`${index}`}
            style={{ background: "rgba(0,0,0,0.75)" }}
          >
            <Accordion.Header>
              Drink {index + 1}: {element.name}
            </Accordion.Header>
            <Accordion.Body>
              <SingleDrinkFromMyList
                drink={element}
                refresh={props.refresh}
                key={element.id}
              />
            </Accordion.Body>
          </Accordion.Item>
        </>
      ))}
    </Accordion>
  );
};
