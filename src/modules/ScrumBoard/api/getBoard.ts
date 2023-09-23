import { BoardType } from "@/common/types/BoardType";

const getBoardApi: (boardId: string) => BoardType = (boardId) => {
  const response = {
    stages: [
      {
        id: 1,
        stageName: "To Do",
        tasks: [
          {
            id: 1,
            title: "Task 1",
            description: "Description 1",
            imageUrl: "https://random.imagecdn.app/200/300",
          },
          {
            id: 2,
            title: "Task 2",
          },
        ],
      },
      {
        id: 1928712,
        stageName: "Priority",
        tasks: [
          {
            id: 7,
            title: "Task 7",
            description: "Description 7",
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
          },
          {
            id: 4,
            title: "Task 4",
            description: "Description 4",
          },
        ],
      },
      {
        id: 1398,
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
            imageUrl: "https://picsum.photos/200/300",
          },
        ],
      },
      // { id: 4, stageName: "To Do", tasks: [] },
      // { id: 5, stageName: "To Do", tasks: [] },
      // { id: 6, stageName: "To Do", tasks: [] },
    ],
  };
  return response;
};

export default getBoardApi;
