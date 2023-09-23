import { StageProps } from "@types/StageProps";
import Task from "../Task";

const Stage : React.FC<StageProps> = ({ stageName,tasks }) => {
  return (
    <div className="h-4/5 w-1/5 bg-red-200 rounded-lg p-2">
      <div className="text-lg  text-center font-semibold">{stageName}</div>
      <div className="flex flex-col gap-2 h-full overflow-y-auto" >
        
      {
        tasks.map((task) => (
          <Task key={task.id} task={task} index={task.id} />
          ))
        }
        </div>
    </div>
  );
}

export default Stage;