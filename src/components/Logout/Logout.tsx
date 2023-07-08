import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user-context";
import { toast } from "react-toastify";
import { Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { Spinner } from "../common/spinner/Spinner";
import "./Logout.css";
import { Footer } from "../common/footer/Footer";

export const Logout = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    // if (window.confirm("Do You want log out?")) {
    //   (async () => {
    //     localStorage.setItem("IsLoggedIn", "false");
    //     const res = await fetch("http://localhost:3001/auth/logout", {
    //       credentials: "include",
    //     });
    //     const data = await res.json();
    //     if (data.ok) {
    //       setLoading(false);
    //       setIsLoggedIn(false);
    //       toast.success("Successfully logged out!");
    //     }
    //   })();
    // }

    const { confirm } = Modal;

    confirm({
      title: `Are you sure?`,
      icon: <ExclamationCircleFilled />,
      content: `Do you Want to Log out?`,
      // centered: true,
      async onOk() {
        (async () => {
          sessionStorage.setItem("IsLoggedIn", "false");
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
      },
      onCancel() {
        console.log("Cancel");
        navigate("/RandomDrink");
      },
    });
  }, []);

  return loading ? (
    <>
      <div className="container-logout">
        <Spinner />
      </div>
      <Footer />
    </>
  ) : (
    <>
      <div className="container-logout">
        <h3 className="logout-info"> Successfully Logged out</h3>
      </div>
      <Footer />
    </>
  );
};