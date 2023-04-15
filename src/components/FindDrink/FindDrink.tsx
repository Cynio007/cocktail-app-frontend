import React, { FormEvent, useState } from "react";
import { RandomDrinkEntity } from "../../types/randomDrink";
import { Link } from "react-router-dom";

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
    console.log(form);
  };

  return (
    <>
      <form onSubmit={sendForm}>
        <h2>Find Drink</h2>
        <p>
          <label>
            Drink Name:
            <br />
            <input
              placeholder="e.g. Mojito"
              type="text"
              value={form.name}
              onChange={(e) => updateForm("name", e.target.value)}
            />
          </label>
        </p>
        <Link to={`/drink/${form.name}`}>
          <button>Find Me!</button>
        </Link>
      </form>
    </>
  );
};
