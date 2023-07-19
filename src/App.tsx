import React, { useContext, useState } from "react";
import "./App.css";
import { RandomDrinkView } from "./views/RandomDrinkView";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { NotFoundView } from "./views/NotFoundView";
import { FoundDrink } from "./components/FindDrink/FoundDrink";
import { DrinkNotFoundView } from "./views/DrinkNotFoundView";
import { Registration } from "./components/Registration/Registration";
import { ToastContainer } from "react-toastify";
import { Login } from "./components/Login/Login";
import { UserList } from "./components/UserList/UserList";
import { UserContext } from "./context/user-context";
import { Logout } from "./components/Logout/Logout";
import { HomePage } from "./components/HomePage/HomePage";

export const App = () => {
  const checkStatus = () => {
    if (sessionStorage.getItem("IsLoggedIn") === "true") {
      return true;
    } else {
      return false;
    }
  };
  const [isLoggedIn, setIsLoggedIn] = useState(checkStatus());

  const user = useContext(UserContext);

  return (
    <>
      <ToastContainer theme="light" />
      <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/UserList" element={<UserList />} />
          <Route path="/drink/:name" element={<FoundDrink />} />
          <Route path="/Drink" element={<DrinkNotFoundView />} />
          <Route path="/RandomDrink" element={<RandomDrinkView />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
};
