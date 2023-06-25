import React, { MouseEventHandler } from "react";
import { SingleDrinkFromMyListEntity } from "../../types/singleDrinkFromMyList";
import { ToastContainer, toast } from "react-toastify";
import { Button, ConfigProvider, Modal, Space, theme } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";

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
      <table>
        <thead>
          <tr>
            <th>Id:</th>
            <th>Name:</th>
            <th>Alcoholic:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.drink.id} </td>
            <td>{props.drink.name}</td>
            <td>{props.drink.alcoholic}</td>
            <td>
              <a href="#" onClick={deleteDrink}>
                🗑
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Ingredients:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.drink.ingredients}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Instructions:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.drink.instruction}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Photo:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={props.drink.img}></img>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
