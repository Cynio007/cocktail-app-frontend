import React, { FormEvent, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../context/user-context";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Spinner } from "../common/spinner/Spinner";
import "./Login.css";
import { Footer } from "../common/footer/Footer";
export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const { setIsLoggedIn } = useContext(UserContext);

  const navigate = useNavigate();

  const updateForm = (key: string, value: any) => {
    setUser((user) => ({
      ...user,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email: user.email,
        pwd: user.password,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.ok) {
      setIsLoggedIn(data.ok);
      sessionStorage.setItem("IsLoggedIn", "true");
      toast.success("Successfully logged in!");
      return navigate("/RandomDrink");
    } else {
      toast.error(data.error);
      setLoading(false);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    // <div className="LoginPage">
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="email"
    //       value={user.email}
    //       placeholder="E-mail"
    //       onChange={(e) => updateForm("email", e.target.value)}
    //     />
    //     <input
    //       type="password"
    //       value={user.password}
    //       placeholder="Password"
    //       onChange={(e) => updateForm("password", e.target.value)}
    //     />
    //     <div className="Row">
    //       {/* <Link to={"/forgotten-password"} className="theme-text-light">
    //         Zapomniałeś hasła?
    //       </Link> */}
    //       <button>Zaloguj się</button>
    //     </div>
    //   </form>
    // </div>
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Col xs={2}>
            <Form.Label className="form-font">Email address:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={user.email}
              onChange={(e) => updateForm("email", e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Col xs={2}>
            <Form.Label className="form-font">Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => updateForm("password", e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit">
          Log in
        </Button>
      </Form>
      <Footer />
    </>
  );
};
