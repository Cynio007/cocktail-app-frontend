import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const signUp = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (password.length < 6) {
      return toast.error("Password must contains min. 6 signs!");
    } else if (password !== checkPassword) {
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
      toast.error("Given email already exist!");
    } else {
      toast.success("Account created correct!");
      navigate("/test"); // nawigować do strony logowania
    }
  };

  return (
    <div>
      <form onSubmit={signUp}>
        <input
          className="email"
          type="email"
          value={email}
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="password"
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          value={checkPassword}
          placeholder="Confirm password"
          onChange={(e) => setCheckPassword(e.target.value)}
        />
        <div className="Row">
          <button>Sign up</button>
        </div>
      </form>
    </div>
  );
};
