import { BoardType } from "@/common/types/BoardType";
import { useState } from "react";
import Stage from "./Stage";
import { TaskType } from "@/common/types/TaskType";

const ScrumBoard: React.FC = () => {
  const [boardData, setBoardData] = useState<BoardType>({
    stages: [
      {
        id: 1,
        stageName: "To Do",
        tasks: [
          {
            id: 1,
            title: "Task 1",
            description: "Description 1",
            imageUrl: "https://picsum.photos/200/300",
          },
          {
            id: 2,
            title: "Task 2",
            description: "Description 2",
            imageUrl: "https://picsum.photos/200/300",
          },
        ],
      },
      {
        id: 2,
        stageName: "In Progress",
        tasks: [
          {
            id: 3,
            title: "Task 3",
            description: "Description 3",
            imageUrl: "https://picsum.photos/200/300",
          },
          {
            id: 4,
            title: "Task 4",
            description: "Description 4",
          },
        ],
      },
      {
        id: 3,
        stageName: "Done",
        tasks: [
          {
            id: 5,
            title: "Task 5",
            description: "Description 5",
            imageUrl: "https://picsum.photos/200/300",
          },
          {
            id: 6,
            title: "Task 6",
            description: "Description 6",
            imageUrl: "https://picsum.photos/200/300",
          },
        ],
      },
    // { id: 4, stageName: "To Do", tasks: [] },
    // { id: 5, stageName: "To Do", tasks: [] },
    // { id: 6, stageName: "To Do", tasks: [] },
    ]
  }
    );
  // const boardWidth = boardData.length * 1/2 * 100;
  // console.log(boardWidth);

  const [targetTask, setTargetTask] = useState({ taskId: 0, stageId: 0 });

  const handleDragEnd = (taskId: number, stageId: number) => {
    // console.log(taskId, stageId);

    let sourceStageIndex, sourceTaskIndex, targetStageIndex, targetTaskIndex;

    sourceStageIndex = boardData.stages.findIndex(
      (item) => item.id === stageId
    );
    if (sourceStageIndex == -1) return;

    sourceTaskIndex = boardData.stages[sourceStageIndex]?.tasks?.findIndex(
      (item: TaskType) => item.id === taskId
    );
    if (sourceTaskIndex == -1) return;

    targetStageIndex = boardData.stages.findIndex(
      (item) => item.id === targetTask.stageId
    );

    if (targetStageIndex == -1) return;

    targetTaskIndex = boardData.stages[targetStageIndex]?.tasks?.findIndex(
      (item: TaskType) => item.id === targetTask.taskId
    );
    if (targetTaskIndex == -1) return;

    const tempStages = [...boardData.stages];
    const sourceTask = tempStages[sourceStageIndex].tasks[sourceTaskIndex];

    tempStages[sourceStageIndex].tasks.splice(sourceTaskIndex, 1);
    tempStages[targetStageIndex].tasks.splice(targetTaskIndex, 0, sourceTask);

    // console.log({
    //   sourceStageIndex,
    //   sourceTaskIndex,
    //   targetStageIndex,
    //   targetTaskIndex,
    // });

    setBoardData({ stages: tempStages });
  };

  const handleDragEnter = (taskId: number, stageId: number) => {
    // console.log(taskId, stageId);

    if (targetTask.taskId === taskId) return;

    setTargetTask({
      taskId,
      stageId,
    });
  };

  return (
    <div
      className={`h-screen flex flex-row justify-around items-center overflow-x-auto gap-7`}>
      {boardData.stages.map((stage) => (
        <Stage
          key={stage.id}
          stageName={stage.stageName}
          tasks={stage.tasks}
          id={stage.id}
          handleDragEnd={handleDragEnd}
          handleDragEnter={handleDragEnter}
        />
      ))}
    </div>
  );
};

export default ScrumBoard;
