import axios from "axios";

const EditTask = async ({ cardId, cardData,  func }) => {
  let newTask = prompt("Enter Updated Task: ", cardData);
//   const url = 'http://localhost:5000/modifyTask/';
  // const url = "https://t-manager-node.herokuapp.com/modifyTask/";
  const url = "https://task-manager-backend-bcxk.onrender.com/modifyTask/";

  if(newTask.length === 0 || newTask === " "){
    return func("Enter some task", 2);
  }

  await axios.patch(
    url,
    {
        id : cardId,
        "data": newTask
    }
  ).then(() => {
    func("Task Updated successfully", 1);
  }).catch(() => {
    func("unable to Update Task", 0)
  })
};

export default EditTask;