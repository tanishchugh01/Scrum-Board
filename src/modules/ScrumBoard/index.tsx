import Stage from "./Stage";

const boardData = [
  {
    stageName: "Backlog",
    tasks: [
      {
        id: 2,
        title: "Task 2",
        description: "Task 2 description",
        status: "backlog",
      },
    ],
  },
  {
    stageName: "To Do",
    tasks: [
      {
        id: 3,
        title: "Task 3",
        description: "Task 3 description",
        status: "todo",
      },
      {
        id: 4,
        title: "Task 4",
        description: "Task 4 description",
        status: "todo",
      },
    ],
  },
  {
    stageName: "In Progress",
    tasks: [
      {
        id: 5,
        title: "Task 5",
        description: "Task 5 description",
        status: "inprogress",
      },
      {
        id: 6,
        title: "Task 6",
        description: "Task 6 description",
        status: "inprogress",
      },
    ],
  },
  {
    stageName: "Done",
    tasks: [
      {
        id: 7,
        title: "Task 7",
        description: "Task 7 description",
        status: "done",
      },
      {
        id: 8,
        title: "Task 8",
        description: "Task 8 description",
        status: "done",
      },
    ],
  }
];

const ScrumBoard: React.FC = () => {
  
  const boardWidth = boardData.length * 1/2 * 100;
  console.log(boardWidth)
  return (
    <div className={`h-screen flex flex-row justify-evenly items-center w-[${boardWidth}vw]`} >
      {boardData.map((stage) => (
        <Stage key={stage.stageName} stageName={stage.stageName} tasks={stage.tasks} />
      ))}
    </div>
  );
};

export default ScrumBoard;
