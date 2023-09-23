import { StageType } from "@/common/types/StageType";
import Task from "../Task";
import { useState } from "react";
// const handleDragEnd = (taskId: number, stageId: number) => {
const Stage: React.FC<
  StageType & { handleDragEnd: (taskId: number, stageId: number) => void } & {
    handleDragEnter: (taskId: number, stageId: number) => void;
  } & { addTask: (taskName: string, stageId: number) => void }
> = ({ id, stageName, tasks, handleDragEnd, handleDragEnter, addTask }) => {
  const [taskName, setTaskName] = useState<string>("");
  return (
    <div
      className="h-4/5 w-[20vw] rounded-lg p-2 shadow-lg hover:shadow-xl bg-gradient-to-tr from-red-200 to-red-400"
      // onDragEnter={() => handleDragEnter(-2, id)}
      // onDragEnd={() => handleDragEnd(-2, id)}
      // onDragEnter={() => console.log("enter", id)}
      // onDragEnd={() => console.log("end", id)}
      >
      <div className="text-lg  text-center font-semibold">{stageName}</div>
      <div className="flex flex-col gap-2 h-5/6 overflow-y-auto">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            imageUrl={task.imageUrl}
            handleDragEnd={handleDragEnd}
            handleDragEnter={handleDragEnter}
            stageId={id}
          />
        ))}
      </div>
      {/* add task input */}
      <div className="flex flex-row justify-center items-center mt-2">
        <input
          type="text"
          placeholder="Add Task"
          value={taskName}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask(taskName, id);
              setTaskName("");
            }
          }}
          onChange={(e) => setTaskName(e.target.value)}
          className="w-full border-2 border-gray-300 rounded-lg p-2"
        />
        <button
          className="bg-green-500 text-white rounded-lg p-2"
          onClick={() => {
            addTask(taskName, id);
            setTaskName("");
          }}>
          +
        </button>
      </div>
    </div>
  );
};

export default Stage;
