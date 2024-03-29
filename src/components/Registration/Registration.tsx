import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "../common/spinner/Spinner";
import "./Registration.css";
import { Footer } from "../common/footer/Footer";

export const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const signUp = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!email.includes("@")) {
      setLoading(false);
      return toast.error('E-mail address must contain "@"');
    } else if (password.length < 6) {
      setLoading(false);
      return toast.error("Password must contains min. 6 signs!");
    } else if (password !== checkPassword) {
      setLoading(false);
      return toast.error("Check password!");
    }
    const res = await fetch("http://localhost:3001/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        pwd: password,
      }),
    });

    const data = await res.json();
    if (data.isSuccess === false) {
      setLoading(false);
      return toast.error("Given email already exist!");
    } else {
      toast.success("Account created correct!");
      navigate("/login");
    }
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <h2 className="register">Register now:</h2>
      <Form onSubmit={signUp}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Col xs={2}>
            <Form.Label className="register-font">Email address:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Col xs={2}>
            <Form.Label className="register-font">Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Col xs={2}>
            <Form.Label className="register-font">Confirm Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={checkPassword}
              onChange={(e) => {
                setCheckPassword(e.target.value);
              }}
            />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign up
        </Button>
      </Form>
      <Footer />
    </>
  );
};
