import { TodoList } from './todo.js';

const myTodos = new TodoList();

myTodos.addTask("Buy groceries");
myTodos.addTask("Finish homework");
myTodos.addTask("Walk the dog");

myTodos.completeTask("Finish homework");

myTodos.listTasks();
