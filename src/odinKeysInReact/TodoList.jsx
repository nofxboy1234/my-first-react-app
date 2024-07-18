import { v7 as uuid } from 'uuid';

const todos = [
  { task: 'Mow the yard', id: uuid() },
  { task: 'Work on Odin  Projects', id: uuid() },
  { task: 'Feed the cat', id: uuid() },
];

function TodoList() {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}

export default TodoList;
