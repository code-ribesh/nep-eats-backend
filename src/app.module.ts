import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {TypeOrmModule} from '@nestjs/typeorm'
import { ResturantModule } from './resturant/resturant.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
       autoSchemaFile: true,
    }),
    ResturantModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "12345",
      database: "nep-eats",
      synchronize: true,
      logging: true
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
