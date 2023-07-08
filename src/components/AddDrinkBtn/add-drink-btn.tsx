import React, { useContext, useState } from "react";
import { SingleDrinkEntity } from "../../types/singleDrink";
import { toast } from "react-toastify";
import { UserContext } from "../../context/user-context";
import Button from "react-bootstrap/Button";
import { Spinner } from "../common/spinner/Spinner";
import "./add-drink-btn.css";

interface Props {
  drink: SingleDrinkEntity;
}

export const AddDrinkBtn = (props: Props) => {
  const [loading, setloading] = useState<boolean>(false);
  const { isLoggedIn } = useContext(UserContext);

  const addToList = async () => {
    setloading(true);

    await fetch("http://localhost:3001/user/addDrink", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(props.drink),
    });

    toast.success("Successfully added to list!");
    setloading(false);
  };

  if (isLoggedIn) {
    return loading ? (
      <Spinner />
    ) : (
      <Button onClick={addToList} variant="success" className="button">
        Add to my list
      </Button>
    );
  } else
    return (
      <Button
        onClick={() =>
          toast.warn("You must be logged in to add a drink to the list!")
        }
        variant="success"
        className="button"
      >
        Add to my list
      </Button>
    );
};
