import React, { MouseEventHandler } from "react";
import { SingleDrinkFromMyListEntity } from "../../types/singleDrinkFromMyList";
import { ToastContainer, toast } from "react-toastify";
import { Button, ConfigProvider, Modal, Space, theme } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import Table from "react-bootstrap/Table";
import "./single-drink-from-my-list.css";

interface Props {
  drink: SingleDrinkFromMyListEntity;
  refresh: () => void;
}

export const SingleDrinkFromMyList = (props: Props) => {
  const deleteDrink = async (ev: React.MouseEvent<HTMLElement>) => {
    ev.preventDefault();

    // if (
    //     !window.confirm(`Are You sure You want to remove ${props.drink.name}`)

    // ) {
    //   return;
    // }
    // const res = await fetch(`http://localhost:3001/user/${props.drink.id}`, {
    //   method: "DELETE",
    //   credentials: "include",
    // });
    // const data = await res.json();
    // props.refresh();
    // toast.success(`Successfully remove ${props.drink.name}!`);
    const { confirm } = Modal;

    confirm({
      title: `Are you sure?`,
      icon: <ExclamationCircleFilled />,
      content: `Do you Want to delete "${props.drink.name}"?`,
      async onOk() {
        console.log("OK");
        const res = await fetch(
          `http://localhost:3001/user/${props.drink.id}`,
          {
            method: "DELETE",
            credentials: "include",
          }
        );
        const data = await res.json();
        props.refresh();
        toast.success(`Successfully remove "${props.drink.name}"!`);
      },
      onCancel() {
        console.log("Cancel");
        return;
      },
    });
  };

  return (
    <>
      <div className="container-table-mylist">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className="th">To remove from my list:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td">
                <a href="#" onClick={deleteDrink} className="remove-link">
                  🗑 Click here!
                </a>
              </td>
            </tr>
          </tbody>

          <thead>
            <tr>
              <th className="th">Name:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td">{props.drink.name} </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th className="th">Type:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td">{props.drink.alcoholic}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th className="th">Ingredients:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td">{props.drink.ingredients}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th className="th">Instructions:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td">{props.drink.instruction}</td>
            </tr>
          </tbody>
          {/* <thead>
          <tr>
            <th className="th">Photo:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td">
              <img src={props.drink.img}></img>
            </td>
          </tr>
        </tbody> */}
        </Table>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className="th">Photo:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td">
                <img src={props.drink.img}></img>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};
