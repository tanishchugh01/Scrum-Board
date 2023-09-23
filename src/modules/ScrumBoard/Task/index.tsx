import { TaskType } from "@/common/types/TaskType";

const Task: React.FC<
  TaskType & { handleDragEnd: (taskId: number, stageId: number) => void } & {
    handleDragEnter: (taskId: number, stageId: number) => void;
  }
> = ({
  title,
  description,
  imageUrl,
  stageId,
  id,
  handleDragEnd,
  handleDragEnter,
}) => {
  return (
    <div
      draggable
      onDragEnd={() => handleDragEnd(id, stageId)}
      onDragEnter={() => handleDragEnter(id, stageId)}
      className="w-full bg-white rounded-lg p-2">
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-sm">{description}</div>
      {imageUrl && (
        <img className="h-20 w-full object-cover" src={imageUrl} alt={title} />
      )}
    </div>
  );
};

export default Task;
