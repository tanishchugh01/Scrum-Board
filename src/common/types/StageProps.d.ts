// StageProps
// export interface StageProps {
//   stageName: string;
// }

// // const boardData = [
//   {
//     stageName: "Backlog",
//     tasks: [
//       {
//         id: 1,
//         title: "Task 1",
//         description: "Task 1 description",
//         status: "backlog",
//       },
//       {
//         id: 2,
//         title: "Task 2",
//         description: "Task 2 description",
//         status: "backlog",
//       },
//     ],
//   },

export interface StageProps {
  stageName: string;
  tasks: TaskProps[];
}