import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput {
  @Field(() => String)
  description: string;

  @Field(() => Boolean)
  done: boolean;
}
