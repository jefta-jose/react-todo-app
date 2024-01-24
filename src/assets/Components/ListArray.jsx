import { useState } from "react";
import "../Components/ListArray.scss";
import check from "../icon-check.svg";
import cancel from "../icon-cross.svg";

const ListArray = () => {
  // State to manage the list of tasks
  const [listitems, setListitems] = useState([
    { icon1: check, task: "complete online javascript course", end1: cancel },
    { icon1: check, task: "Jog around the park 3X", end1: cancel },
    { icon1: check, task: "10 minutes Meditation", end1: cancel },
    { icon1: check, task: "Read for one hour", end1: cancel },
    { icon1: check, task: "Pick up groceries", end1: cancel },
    {
      icon1: check,
      task: "complete todo App on Frontend Mentor",
      end1: cancel,
    },
  ]);

  // State to keep track of the total number of tasks
  const [number, setNumber] = useState(listitems.length);

  // Function to update a task based on the action (complete or cancel)
  const updateTask = (index, action) => {
    setListitems((prevItems) => {
      const updatedList = [...prevItems];
      if (action === "complete") {
        updatedList[index].icon1 = check; // Update icon1 for completed task
      } else if (action === "cancel") {
        updatedList.splice(index, 1); // Remove the task for cancel action
      }
      return updatedList;
    });

    // Update the total number of tasks
    setNumber((prevNumber) =>
      action === "cancel" ? prevNumber - 1 : prevNumber
    );
  };

  // Function to add a new task to the list
  const addTask = (newTask) => {
    setListitems((prevItems) => [
      ...prevItems,
      { icon1: check, task: newTask, end1: cancel }, // Ensure distinct values for icon1 and end1
    ]);
    setNumber((prevNumber) => prevNumber + 1); // Increment the total number of tasks
  };

  // Function to handle form submission and add a new task
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = e.target[1].value.trim();
    if (newTask !== "") {
      addTask(newTask);
      e.target[1].value = "";
    }
  };

  // JSX structure for rendering the component
  return (
    <div className="list-container1">
      <div className="add-a-new-task">
        <form onSubmit={handleSubmit} className="add-to-form">
          <button type="submit"></button>
          <input
            className="place-holder"
            type="text"
            placeholder="Currently Typing"
          />
        </form>
      </div>
      <div className="list-body">
        <div className="tasks">
          {/* Mapping through the list items and rendering each task */}
          {listitems &&
            listitems.map((item, index) => (
              <div key={index} className="task">
                <div className="start">
                  {/* Button to complete a task */}
                  <button onClick={() => updateTask(index, "complete")}>
                    <img src={item.icon1} alt="Complete" />
                  </button>
                  <div className="task-text">{item.task}</div>
                </div>
                <div className="end">
                  {/* Button to cancel a task */}
                  <button onClick={() => updateTask(index, "cancel")}>
                    <img src={item.end1} alt="Cancel" />
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div className="footer">
          <div>
            {/* Displaying the current number of tasks */}
            <h4>Current value : {number}</h4>
          </div>
          <div className="middle-footer">
            {/* Navigation options (All, Active, Completed) */}
            <div>All</div>
            <div>Active</div>
            <div>Completed</div>
          </div>
          {/* Button to clear completed tasks */}
          <div className="completed">Clear Completed</div>
        </div>
      </div>
    </div>
  );
};

export default ListArray;
