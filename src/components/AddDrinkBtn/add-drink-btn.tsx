import React, { useContext, useState } from "react";
import { SingleDrinkEntity } from "../../types/singleDrink";
import { toast } from "react-toastify";
import { UserContext } from "../../context/user-context";

interface Props {
  drink: SingleDrinkEntity;
}

export const AddDrinkBtn = (props: Props) => {
  const [loading, setloading] = useState<boolean>(false);
  const { isLoggedIn } = useContext(UserContext);

  const addToList = async () => {
    setloading(true);
    console.log(props.drink);
    const res = await fetch("http://localhost:3001/user/addDrink", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(props.drink),
    });
    const data = await res.json();
    toast.success("Successfully added to list!");
    setloading(false);
    console.log("dodany", data);
  };

  if (isLoggedIn) {
    return loading ? (
      <h3>Loading...</h3>
    ) : (
      <button onClick={addToList}>Add to my list</button>
    );
  } else
    return (
      <button
        onClick={() =>
          toast.warn("You must be logged in to add a drink to the list!")
        }
      >
        Add to my list
      </button>
    );
};
