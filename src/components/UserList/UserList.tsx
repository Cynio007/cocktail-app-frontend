import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user-context";

export const UserList = () => {
  const [list, setList] = useState<string[]>(["empty"]);
  const [loading, setLoading] = useState<boolean>(true);
  const { isLoggedIn } = useContext(UserContext);
  const [test, setTest] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      (async () => {
        const res = await fetch("http://localhost:3001/user/mylist", {
          credentials: "include",
        });
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
  }, []);

  if (!isLoggedIn) {
    return <h3>You must be logged in to see Your drink list!</h3>;
  }

  return loading ? <p>Loading...</p> : <div>{list}</div>;
};
