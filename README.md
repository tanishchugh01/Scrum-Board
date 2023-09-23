## Scrum Board

### A light weight interactive scrum board to add task and manage them

### [Live Demo](https://scrum-board-tanishchugh01.vercel.app/)

### [For more information about the project click here](https://github.com/tanishchugh01/Scrum-Board/blob/main/INFO.MD)

## Questions and Answers
Q: If user can create and edit stages for a particular board. For example instead of Open > In Progress > Done if they want the stages of their task board to be Read > Working > Reviewing > Completed


A: The stages of a board are stored in the object of the board itself. So, if a user wants to change the stages of a board, he/she can simply change the stages in the object of the board.
The object that is sent to the client is as follows:

```js
{
  stages: [
    id: 1,
    stageName: "To Do",
    tasks: [
      ...tasks
    ],
    id: 2,
    stageName: "In Progress",
    tasks: [
      ...tasks
    ],
    id: 3,
    stageName: "Done",
    tasks: [
      ...tasks
    ],
  ],
}
```

So if a user wants to change the stages of a board, he/she can simply change the stages in the object of the board.

Q: If users can comment on tasks

A: Currently, the task object has the following properties:

```js
{
  title: string;
  description: string;
  imageUrl: string | undefined;
  id: number;
  stageId: number;
}
```

So, we can add a property `comments: commentType[];` to the task object. The `commentType` will be as follows:

```js
{
  id: number;
  comment: string;
  userId: number;
}
```

Then we can add a new api endpoint to add a comment to a task. The api endpoint will take the comment and the task id and will add the comment to the task and return the updated task/updated board.

Q: How will you do error handling?

A: We have a reusable error component present in the `src/common/components` folder. The error component will take error object as props and will show the error message to the user accordingly. We can use axios response to get the error message and error type and then we can show the error message to the user. We can map for different error status codes and show the error message accordingly.

```js
switch (error?.response?.status) {
  case 403:
    message = "Rate Limit Exceeded";
    break;
  case 404:
    message = "Not Found";
    break;
  case 500:
    message = "Internal Server Error";
    break;
  case 400:
    message = "Bad Request";
    break;
  case 401:
    message = "Unauthorized";
    break;
  case 402:
    message = "Payment Required";
    break;
  default:
    message = "Something went wrong";
    break;
}
```

