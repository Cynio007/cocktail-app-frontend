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

      {/* <form onSubmit={sendForm} className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          aria-label="Search"
          placeholder="Find drink (e.g. Mojito)"
          type="text"
          value={form.name}
          onChange={(e) => updateForm("name", e.target.value)}
        />

        <Link to={`/drink/${form.name}`}>
          <button className="btn btn-outline-success my-2 my-sm-0">
            Search
          </button>
        </Link>
      </form> */}

      {/* <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form> */}

      {/* <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Link to={`/drink/${form.name}`}>
          <Button variant="outline-success">Search</Button>
        </Link>
      </Form> */}
    </>
  );
};
