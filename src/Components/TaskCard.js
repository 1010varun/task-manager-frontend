import React from "react";
import axios from "axios";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import EditTask from "./EditTask";

const TaskCard = ({func, cardData, cardId}) => {

  // const url = 'http://localhost:5000/delete/';
  const url = "https://t-manager-node.herokuapp.com/delete/";

  const deleteTask = async () => {
    await axios({
      method: 'delete',
      url: url + cardId
    }).then(() => {
      // console.log("deleted");
      func("Task Deleted", 3);
    })
    .catch((err) => {
      func("Unable to delete Task", 0);
    })
  }


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 bg-white border rounded-md shadow-md md:flex-row w-4/5 lg:w-4/6 xl:w-3/6 mx-auto mt-5 p-3">
      <div className="text-start w-11/12 my-auto overflow-auto">{cardData}</div>
      <div className="flex mx-auto sm:mr-1">
        <button onClick={() => {
          EditTask({cardId, func})}}>
          <AiOutlineEdit size={25} />
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
        <button onClick={deleteTask}>
          <RiDeleteBin5Line size={25} color={"#800000"} />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
