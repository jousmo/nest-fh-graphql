import { Query, Resolver } from '@nestjs/graphql';
import { TodoEntity } from './entity/todo.entity';

@Resolver()
export class TodoResolver {
  @Query(() => [TodoEntity], {
    description: 'Retorna una lista de todos',
    name: 'todos',
  })
  findAll(): TodoEntity[] {
    return [];
  }

  findOne() {
    return {};
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
