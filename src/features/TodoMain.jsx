import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtask, removetask, togglecomplete } from "./TodoSlice";
import { MdOutlineDoneOutline } from "react-icons/md";

const TodoMain = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const task = useSelector((state) => state.todo.task);

  const handleAdd = () => {
    dispatch(addtask(input));
    setInput("");
  };

  const habdleRemoveTask = (index) => {
    dispatch(removetask(index))
    console.log("removed");
    
  }

  const handleToggleChange = (index) => {
    dispatch(togglecomplete(index));
  };

  return (
    <div className="h-screen bg-slate-200 flex justify-center items-center flex-col gap-5">
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="bg-yellow-300 px-2  rounded-lg hover:bg-yellow-500"
        >
          ADD
        </button>
      </div>
      <div>
        <ul className="flex flex-col gap-2">
          {task.map((item, index) => (
            <div
              className={` px-5 flex justify-between gap-5 ${item.completed? "bg-green-500" : "bg-red-500"}`}
              key={index}
            >
              {item.text}
              <button
                onClick={
                    !item.completed ? () => handleToggleChange(index) :
                    ()=> habdleRemoveTask(index)
                }
              >
                
                {console.log(item.completed)
                }
                {!item.completed ? <MdOutlineDoneOutline /> :   "Remove"}
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoMain;
