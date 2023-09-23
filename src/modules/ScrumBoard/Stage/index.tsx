import { StageType } from "@/common/types/StageType";
import Task from "../Task";
// const handleDragEnd = (taskId: number, stageId: number) => {
const Stage: React.FC<
  StageType & { handleDragEnd: (taskId: number, stageId: number) => void } & {
    handleDragEnter: (taskId: number, stageId: number) => void;
  }
> = ({ id, stageName, tasks, handleDragEnd, handleDragEnter }) => {
  return (
    <div className="h-4/5 w-[20vw] bg-red-200 rounded-lg p-2"
      // onDragEnter={() => handleDragEnter(-2, id)}
      // onDragEnd={() => handleDragEnd(-2, id)}
      onDragEnter={() => console.log("enter", id)}
      onDragEnd={() => console.log("end", id)}
    >
      <div className="text-lg  text-center font-semibold">{stageName}</div>
      <div className="flex flex-col gap-2 h-full overflow-y-auto">
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
    </div>
  );
};

export default Stage;
