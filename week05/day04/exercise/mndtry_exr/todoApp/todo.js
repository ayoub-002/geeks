export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push({ task, completed: false });
  }

  completeTask(task) {
    const found = this.tasks.find(t => t.task === task);
    if (found) {
      found.completed = true;
    } else {
      console.log(`Task "${task}" not found.`);
    }
  }

  listTasks() {
    console.log("Todo List:");
    this.tasks.forEach((t, index) => {
      const status = t.completed ? "[✓]" : "[ ]";
      console.log(`${index + 1}. ${status} ${t.task}`);
    });
  }
}
