import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AggregationsType {
  @Field(() => Int)
  total: number;

  @Field(() => Int)
  pending: number;

  @Field(() => Int, { deprecationReason: 'Usa mejor completedNew' })
  completed: number;

  @Field(() => Int)
  completedNew: number;
}
