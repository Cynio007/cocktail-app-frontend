import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user-context";
import { SingleDrinkEntity } from "../../types/singleDrink";
import { DrinksList } from "../Drinks/DrinkList";
import { SingleDrinkFromMyListEntity } from "../../types/singleDrinkFromMyList";

export const UserList = () => {
  const [list, setList] = useState<SingleDrinkFromMyListEntity[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { isLoggedIn } = useContext(UserContext);
  const [flag, setFlag] = useState(false);

  console.log(isLoggedIn);
  //   let flag = true;
  const refresh = () => {
    setFlag((flag) => !flag);
  };
  useEffect(() => {
    if (isLoggedIn) {
      (async () => {
        const res = await fetch("http://localhost:3001/user/mylist", {
          credentials: "include",
        });
        await console.log("res", res);
        const data = await res.json();
        // if (data.statusCode === 401) {
        //   console.log("not authorized");
        //   console.log(isLoggedIn);
        // } else {
        setList(data);
        setLoading(false);
        await console.log("list", list);
        await console.log("data", data);
        console.log(isLoggedIn);
        // }
      })();
    }
  }, [flag]);

  if (!isLoggedIn) {
    return <h3>You must be logged in to see Your drink list!</h3>;
  }

  return loading ? (
    <p>Loading...</p>
  ) : list ? (
    <>
      <h2>Your drink list:</h2>{" "}
      <DrinksList drinksArr={list} refresh={refresh} />
    </>
  ) : null;
};
