import { TaskProps } from "@/common/types/TaskProps";

const Task : React.FC<TaskProps> = ({ task, index }) => {
  
  return (
    <div className="h-28 w-full bg-white rounded-lg p-2">
      <div className="text-lg font-semibold">{task.title}</div>
      <div className="text-sm">{task.description}</div>
    </div>
  );
}

export default Task;