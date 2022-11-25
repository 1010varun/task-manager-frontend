import React, { useEffect, useState } from "react";
import MainCard from "./Components/MainCard";
import TaskCard from "./Components/TaskCard";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {

  // const value = [{
  //   "message" : "first", "id":1
  // }, {"message" : "second", "id": 2}, {"message" : "third", "id":3}];

  const toastFunction = (message, type) => {
    if(type === 0){
       toast.error(message, { theme: "dark" })
    }else if(type === 1){
       toast.success(message, { theme: "dark" });
    }else if(type === 2){
      toast.warn(message, { theme: "dark" });
    }else if(type === 3){
      toast.info(message, { theme: "dark" });
    }
    // window.location.reload();
    setTimeout(() => window.location.reload(), 2000);
  }

  const [value, setValue] = useState([]);
  // const url = "http://localhost:5000/task";
  const url = "https://t-manager-node.herokuapp.com/task";

  const fetchData = async () => {
    await axios({
      method: "get",
      url
    }).then((response) => {
      console.log(response.data);
      setValue(response.data)
    })
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <MainCard func = {toastFunction}/>
      {value.length !== 0 ? (
        <h1 className="text-center text-2xl">All Tasks</h1>
      ) : (
        <h1 className="text-center text-2xl">No task</h1>
      )}
      {value.map((item) => {
        return <TaskCard cardData={item.task} cardId={item.id} key={item.id} func = {toastFunction}/>;
      })}
      <ToastContainer/>
    </>
  );
}

export default App;