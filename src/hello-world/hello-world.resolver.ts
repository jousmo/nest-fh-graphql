import { Float, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String)
  helloWorld(): string {
    return 'Hola mundo';
  }

  @Query(() => Float, {
    description: 'Dara un numero aleatorio',
    name: 'randomNumber',
  })
  calculateRandomNumber(): number {
    return Math.random() * 100;
  }
}
