import React, { FormEvent, useState } from "react";
import { RandomDrinkEntity } from "../../types/randomDrink";

export const FindDrink = () => {
  const [form, setForm] = useState<RandomDrinkEntity>({
    id: "",
    name: "",
    alcoholic: "",
    ingredients: [],
    instruction: "",
    img: "",
  });

  const updateForm = (key: string, value: any) => {
    setForm((form) => ({
      ...form,
      [key]: value,
    }));
  };

  const sendForm = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:3001/drink/${form.name}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data: RandomDrinkEntity = await res.json();
    console.log(data);
  };
  return (
    <form onSubmit={sendForm}>
      <h2>Find Drink</h2>
      <p>
        <label>
          Drink Name:
          <br />
          <input
            type="text"
            value={form.name}
            onChange={(e) => updateForm("name", e.target.value)}
          />
        </label>
      </p>

      <button>Find Me!</button>
    </form>
  );
};
