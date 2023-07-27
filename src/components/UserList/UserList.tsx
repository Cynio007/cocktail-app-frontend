import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user-context";
import { DrinksList } from "../Drinks/DrinkList";
import { SingleDrinkFromMyListEntity } from "../../types/singleDrinkFromMyList";
import { Spinner } from "../common/spinner/Spinner";
import { Footer } from "../common/footer/Footer";
import "./UserList.css";

export const UserList = () => {
  const [list, setList] = useState<SingleDrinkFromMyListEntity[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { isLoggedIn } = useContext(UserContext);
  const [flag, setFlag] = useState(false);

  const refresh = () => {
    setFlag((flag) => !flag);
  };
  useEffect(() => {
    setLoading(true);
    if (isLoggedIn) {
      (async () => {
        const res = await fetch("http://localhost:3001/user/mylist", {
          credentials: "include",
        });

        const data = await res.json();
        setList(data);
        setLoading(false);
      })();
    }
  }, [flag]);

  useEffect(() => {
    window.scrollTo({ top: 250, left: 0, behavior: "smooth" });
  }, [list]);

  if (!isLoggedIn) {
    return <h3>You must be logged in to see Your drink list!</h3>;
  }

  return loading ? (
    <Spinner />
  ) : list ? (
    <>
      <div className="container-list">
        <h2 className="user-list">Your drink list:</h2>
        <DrinksList drinksArr={list} refresh={refresh} />
      </div>
      <Footer />
    </>
  ) : null;
};
