import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoEntity } from './entity/todo.entity';
import { TodoService } from './todo.service';
import { CreateTodoInput } from './dto/inputs/create-todo.input';
import { UpdateTodoInput } from './dto/inputs/update-todo.input';

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

  @Mutation(() => TodoEntity, {
    description: 'Actualiza un todo',
    name: 'updateTodo',
  })
  updateTodo(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateTodoInput', { type: () => UpdateTodoInput })
    updateTodoInput: UpdateTodoInput,
  ): TodoEntity {
    return this.todoService.updateTodo(id, updateTodoInput);
  }

  @Mutation(() => Boolean, {
    description: 'Elimina un todo',
    name: 'removeTodo',
  })
  removeTodo(@Args('id', { type: () => Int }) id: number): boolean {
    return this.todoService.removeTodo(id);
  }
}
