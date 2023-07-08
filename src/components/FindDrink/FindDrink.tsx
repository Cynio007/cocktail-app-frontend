import React, { FormEvent, useState } from "react";
import { SingleDrinkEntity } from "../../types/singleDrink";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

export const FindDrink = () => {
  const [form, setForm] = useState<SingleDrinkEntity>({
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
      <Form className="d-flex" onSubmit={sendForm}>
        <Form.Control
          type="search"
          placeholder="Find drink (e.g. Mojito)"
          className="me-2"
          aria-label="Search"
          value={form.name}
          onChange={(e) => updateForm("name", e.target.value)}
        />
        <Link to={`/drink/${form.name}`}>
          <Button variant="outline-success" type="submit">
            Search
          </Button>
        </Link>
      </Form>
    </>
  );
};
