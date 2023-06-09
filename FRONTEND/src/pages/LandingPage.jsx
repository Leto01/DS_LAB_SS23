import { useEffect, useState } from "react";
import { todoService } from "../service/todo.service";
import Card from "../components/Card/Card";
import Popup from "../components/Popup/Popup";
import TaskInputs from "./Task.Inputs";
import FormInput from "../components/FromInput/FormInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./LandingPage.css";
const LandingPage = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState("");
  const [deleteTask, setDeleteTask] = useState(false);
  const [updateTask, setUpdateTask] = useState(false);
  const [createTask, setCreateTask] = useState(false);
  const [errorDisplay, setErrorDisplay] = useState(false);
  let errorMsg = "";
  const [selectedItem, setSelectedItem] = useState({
    ID: "",
    todo: "",
    priority: -1,
  });

  useEffect(() => {
    if (updateTask && selectedTask !== "") {
      setSelectedItem(findItemById(selectedTask));
    }
  }, [selectedTask]);

  const sortTasks = (a, b) => {
    let fa = a.todo.toLowerCase(),
        fb = b.todo.toLowerCase();
    if (fa < fb) return -1;
    if (fa > fb) return 1;
    return 0;
}


  const openCreateDialog = (e) => {
    e.preventDefault;
    resetSelectedItem();
    setCreateTask(true);
  };

  const commitNewTask = (e) => {
    e.preventDefault();
    let commitItem = {};
    commitItem.todo = selectedItem.todo;
    commitItem.priority = parseInt(selectedItem.priority, 10);
    todoService
      .createTask(commitItem)
      .then((res) => {
        commitItem.ID = res.data.ID;
        setTasks([...tasks, commitItem].sort(sortTasks));
        setCreateTask(false);
      })
      .catch(console.warn);
  };

  const commitUpdateTask = (e) => {
    e.preventDefault();
    let commitItem = {};
    commitItem.todo = selectedItem.todo;
    commitItem.priority = parseInt(selectedItem.priority, 10);
    todoService
      .updateTask(selectedTask, commitItem)
      .then((res) => {
        updateListWithUpdatedTask();
        resetSelectedItem();
      })
      .catch(console.warn);
  };

  const updateListWithUpdatedTask = () => {
    const index = tasks.indexOf(findItemById(selectedItem.ID));
    if (index < 0) return;
    let modifiedTasks = tasks;
    modifiedTasks[index] = selectedItem;
    setTasks([...modifiedTasks]);
  };

  const commitDeleteTask = (e) => {
    console.log(selectedTask);
    todoService
      .deleteTask(selectedTask)
      .then((res) => {
        console.log(res);
        removeTaskItem(selectedTask);
        resetSelectedItem();
      })
      .catch(displayErrorMsg);
  };

  const removeTaskItem = (id) => {
    let index = tasks.indexOf(findItemById(id));
    if (index >= 0) tasks.splice(index, 1);
    setTasks([...tasks]);
  };

  const findItemById = (id) => {
    for (let t of tasks) {
      if (t.ID === id) return t;
    }
  };

  const displayErrorMsg = (msg) => {
    errorMsg = msg;
    setErrorDisplay(true);
  };

  const resetSelectedItem = () => {
    setSelectedTask("");
    errorMsg = "";
    setDeleteTask(false);
    setUpdateTask(false);
  };

  useEffect(() => {
    todoService
      .getAll()
      .then((res) => setTasks(res.data.value.sort(sortTasks)))
      .catch(console.warn);
  }, []);

  useEffect(() => {
    console.log(selectedTask);
  }, [selectedTask]);

  return (
    <>
      <div className="headbar">
        
        <div className="buttonContainer">
          <div className="createButton" onClick={openCreateDialog}>
            <FontAwesomeIcon icon={faPlus} size="2x" />
          </div>
        </div>

        <div className="titleContainer">
          <h1 className="pageTitle">TODO TODAY</h1>
        </div>

      </div>

      <div className="pageContent">
        <div className="taskList">
          {tasks.map((item, index) => {
            return (
              <Card
                item={item}
                setId={setSelectedTask}
                setDelete={setDeleteTask}
                setUpdate={setUpdateTask}
                key={index}
              ></Card>
            );
          })}
        </div>

        <Popup trigger={updateTask} setTrigger={setUpdateTask}>
          <h3>Edit this Task</h3>
          <form
            className="createContent"
            noValidate
            onSubmit={commitUpdateTask}
          >
            {TaskInputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={selectedItem[input.name]}
                onChange={(e) =>
                  setSelectedItem({
                    ...selectedItem,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            ))}
            <button type="submit">UPDATE TASK</button>
          </form>

          {errorDisplay ? <p className="errorMsg">{errorMsg}</p> : <></>}
        </Popup>

        <Popup trigger={createTask} setTrigger={setCreateTask}>
          <h3>Add A New Task</h3>
          <form className="createContent" noValidate onSubmit={commitNewTask}>
            {TaskInputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                onChange={(e) =>
                  setSelectedItem({
                    ...selectedItem,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            ))}
            <button type="submit">SUBMIT TASK</button>
          </form>

          {errorDisplay ? <p className="errorMsg">{errorMsg}</p> : <></>}
        </Popup>

        <Popup trigger={deleteTask} setTrigger={setDeleteTask}>
          <h3>Delete this Task</h3>
          {errorDisplay ? <p className="errorMsg">{errorMsg}</p> : <></>}

          <button onClick={commitDeleteTask}>DELETE TASK</button>
        </Popup>
      </div>
    </>
  );
};

export default LandingPage;
