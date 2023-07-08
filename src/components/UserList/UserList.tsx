import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user-context";
import { SingleDrinkEntity } from "../../types/singleDrink";
import { DrinksList } from "../Drinks/DrinkList";
import { SingleDrinkFromMyListEntity } from "../../types/singleDrinkFromMyList";
import "./UserList.css";
import { Spinner } from "../common/spinner/Spinner";
import { Footer } from "../common/footer/Footer";

export const UserList = () => {
  const [list, setList] = useState<SingleDrinkFromMyListEntity[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { isLoggedIn } = useContext(UserContext);
  const [flag, setFlag] = useState(false);

  console.log(isLoggedIn);
  const refresh = () => {
    setFlag((flag) => !flag);
  };
  useEffect(() => {
    setLoading(true);
    if (isLoggedIn) {
      (async () => {
        // setLoading(true);
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

  useEffect(() => {
    // 👇️ scroll to top on page load

    window.scrollTo({ top: 200, left: 0, behavior: "smooth" });
    console.log("kliknięto effect");
  }, [list]);

  if (!isLoggedIn) {
    return <h3>You must be logged in to see Your drink list!</h3>;
  }

  return loading ? (
    <Spinner />
  ) : list ? (
    <>
      <h2 className="user-list">Your drink list</h2>
      <DrinksList drinksArr={list} refresh={refresh} />
      <Footer />
    </>
  ) : null;
};
