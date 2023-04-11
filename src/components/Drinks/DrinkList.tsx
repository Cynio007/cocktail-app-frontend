import React, { useEffect, useState } from "react";

export const DrinksList = () => {
  const [drinksList, setDrinksList] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3001/user/mylist");
      const data = await res.json();
      console.log(data);
    })();
  }, []);

  if (drinksList === null) {
    return <p>Loading...</p>;
  }

  return null;
};
