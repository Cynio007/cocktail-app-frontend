import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user-context";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";

export const Logout = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { setIsLoggedIn } = useContext(UserContext);

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
      async onOk() {
        (async () => {
          localStorage.setItem("IsLoggedIn", "false");
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
        return;
      },
    });
  }, []);

  return loading ? <h3>loading...</h3> : <h3> Successfully Logged out</h3>;
};
