import React from "react";

interface Props {
  nextDrink: () => void;
}
export const NextDrinkBtn = (props: Props) => {
  return <button onClick={props.nextDrink}>Next</button>;
};
