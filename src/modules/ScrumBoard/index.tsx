import { BoardType } from "@/common/types/BoardType";
import { useState, useEffect } from "react";
import Stage from "./Stage";
import { TaskType } from "@/common/types/TaskType";
import getBoardApi from "./api/getBoard";
import postBoardApi from "./api/postBoard";

const ScrumBoard: React.FC = () => {
  const [boardData, setBoardData] = useState<BoardType>({
    stages: [],
  });

  useEffect(() => {
    const boardId = "1";
    const board = getBoardApi(boardId);
    setBoardData(board);
  }, []);

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
    postBoardApi(boardData, 1);
  };

  const handleDragEnter = (taskId: number, stageId: number) => {
    // console.log(taskId, stageId);

    if (targetTask.taskId === taskId) return;

    setTargetTask({
      taskId,
      stageId,
    });
  };

  const addTask = (taskName: string, stageId: number) => {
    const tempStages = [...boardData.stages];

    const stageIndex = tempStages.findIndex((item) => item.id === stageId);
    if (stageIndex == -1) return;

    const newTask: TaskType = {
      id: Date.now() + Math.random(),
      title: taskName,
      description: "",
      imageUrl: "",
      stageId: stageId,
    };
    tempStages[stageIndex].tasks.push(newTask);
    setBoardData({ stages: tempStages });
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
          // handleDragEnd={handleDragEnd}
          // handleDragEnter={handleDragEnter}
          {...{ handleDragEnd, handleDragEnter, addTask }}
        />
      ))}
    </div>
  );
};

export default ScrumBoard;
