import React from "react";
import Button from "react-bootstrap/Button";
import "./next-drink-btn.css";

interface Props {
  nextDrink: () => void;
}
export const NextDrinkBtn = (props: Props) => {
  return (
    <Button className="button" onClick={props.nextDrink} variant="success">
      Next
    </Button>
  );
};
