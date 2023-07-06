import { Float, Int, Query, Resolver } from '@nestjs/graphql';

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
  gatRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, {
    description: 'Dara un numero del 0 al 10',
    name: 'randomFromZeroTo',
  })
  getRandomFromZeroToTen(): number {
    return Math.floor(Math.random() * 10) + 1;
  }
}
