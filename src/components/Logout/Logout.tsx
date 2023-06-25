import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user-context";
import { toast } from "react-toastify";

export const Logout = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { setIsLoggedIn } = useContext(UserContext);

  useEffect(() => {
    if (window.confirm("Do You want log out?")) {
      (async () => {
        localStorage.setItem("IsLoggedIn", "false");
        const res = await fetch("http://localhost:3001/auth/logout", {
          credentials: "include",
        });
        const data = await res.json();
        if (data.ok) {
          setLoading(false);
          setIsLoggedIn(false);
          toast.success("Successfully logged out!");
        }
      })();
    }
  }, []);

  return loading ? <h3>loading...</h3> : <h3> Successfully Logged out</h3>;
};
