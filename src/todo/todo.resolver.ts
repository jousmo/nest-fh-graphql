import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { TodoEntity } from './entity/todo.entity';
import { TodoService } from './todo.service';

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [TodoEntity], {
    description: 'Retorna una lista de todos',
    name: 'todos',
  })
  findAll(): TodoEntity[] {
    return this.todoService.findAll();
  }

  @Query(() => TodoEntity, {
    description: 'Retorna un todo',
    name: 'todo',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.todoService.findOne(id);
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
