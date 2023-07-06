import { Injectable, NotFoundException } from '@nestjs/common';
import { TodoEntity } from './entity/todo.entity';

@Injectable()
export class TodoService {
  private todos: TodoEntity[] = [
    { id: 1, description: 'todo1 description', done: true },
    { id: 2, description: 'todo2 description', done: true },
    { id: 3, description: 'todo3 description', done: false },
  ];

  findAll(): TodoEntity[] {
    return this.todos;
  }

  findOne(id: number): TodoEntity {
    const todo = this.todos.find((todo) => todo.id === id);

    if (!todo) throw new NotFoundException(`todo ${id} not found`);

    return todo;
  }

  createTodo() {
    return {};
  }

  updateTodo() {
    return {};
  }

  removeTodo() {
    return {};
  }
}
