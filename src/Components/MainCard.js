import React, { useState } from "react";
import {v4} from "uuid"
import axios from "axios"
// import {toast, ToastContainer} from "react-toastify"

const MainCard = ({func}) => {

  const [taskdata, setTaskdata] = useState("");

  // const url = "http://localhost:5000/appendTask";
  const url = "https://t-manager-node.herokuapp.com/appendTask";


  const addTask = async () => {
    console.log("in function");
    if(taskdata.length === 0){
      return func("Unable to Add Empty Task", 2);
      
    }
    const data = {taskdata, "id":v4()};
    await axios({
      method: "post",
      url,
      data
    }).then(() => {
      func("Added Successfull", 1)
      setTaskdata("");
    })
    .catch(() => {
      func("Unable to add", 0);
    })
  }


    return (
      <>
        <div className="text-center w-4/5 lg:w-4/6 xl:w-3/6 mx-auto mt-5 p-2 border rounded-md shadow-2xl mb-14">
          <p className=" mx-auto mb-10 text-2xl">Task Manager</p>
          <div className="relative">
            <input
              type="text"
              id="floating_filled"
              value={taskdata}
              onChange={(e) => setTaskdata(e.target.value)}
              className="block rounded-t-lg px-2.5 pb-1 pt-5 w-full sm:w-10/12 md:w-9/12 xl:w-8/12 mx-auto text-md text-gray-900 bg-white dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer mb-5"
              placeholder=" "
            />
            <label
              htmlFor="floating_filled"
              className="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 sm:left-14 md:left-24 xl:left-28 2xl:left-32 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Enter Task
            </label>
          </div>
          <button
            type="button"
            onClick={addTask}
            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 d-block w-64"
          >
            Add Task
          </button>
        </div>
      </>
    );
}

export default MainCard