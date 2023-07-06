import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoEntity } from './entity/todo.entity';
import { TodoService } from './todo.service';
import { CreateTodoInput } from './dto/inputs/create-todo.input';

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
  findOne(@Args('id', { type: () => Int }) id: number): TodoEntity {
    return this.todoService.findOne(id);
  }

  @Mutation(() => TodoEntity, {
    description: 'Crea un todo',
    name: 'createTodo',
  })
  createTodo(
    @Args('createTodoInput', { type: () => CreateTodoInput })
    createTodoInput: CreateTodoInput,
  ): TodoEntity {
    return this.todoService.createTodo(createTodoInput);
  }

  updateTodo() {
    return {};
  }

  removeTodo() {
    return {};
  }
}
