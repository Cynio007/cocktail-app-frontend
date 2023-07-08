import React from "react";
import { SingleDrinkFromMyListEntity } from "../../types/singleDrinkFromMyList";
import { toast } from "react-toastify";
import { Modal } from "antd";
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

    const { confirm } = Modal;

    confirm({
      title: `Are you sure?`,
      icon: <ExclamationCircleFilled />,
      content: `Do you Want to delete "${props.drink.name}"?`,

      async onOk() {
        await fetch(`http://localhost:3001/user/${props.drink.id}`, {
          method: "DELETE",
          credentials: "include",
        });
        props.refresh();
        toast.success(`Successfully remove "${props.drink.name}"!`);
      },

      onCancel() {
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
                <img src={props.drink.img} alt={props.drink.name}></img>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};
