import React, { useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { RandomDrinkView } from "./views/RandomDrinkView";
import { Route, Routes } from "react-router-dom";
import { TestView } from "./views/TestView";
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

export const App = () => {
  const checkStatus = () => {
    if (localStorage.getItem("IsLoggedIn") === "true") {
      return true;
    } else {
      return false;
    }
  };
  const [isLoggedIn, setIsLoggedIn] = useState(checkStatus());

  const user = useContext(UserContext);
  return (
    <>
      <ToastContainer theme="dark" />
      <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Header />
        <Routes>
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

    //  <div className="App">
    // {
    /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
    // <RandomDrinkView />
    // }
    // </div>
  );
};
