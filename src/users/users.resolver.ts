
import { Resolver, Query, Mutation, Args, Context } from "@nestjs/graphql";
import { CreateAccountInput, CreateAccountOutput } from "./dtos/create-account.dto";
import { LoginInput, LoginOutput } from "./dtos/login.dto";
import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";


@Resolver(of => User)
export class UsersResolver {
   constructor(
       private readonly userService: UsersService
   ){}

   @Query(returns => Boolean)
   hi(){
       return true;
   }

   @Mutation(returns => CreateAccountOutput)
   async createAccount(@Args('input') createAccountInput: CreateAccountInput): Promise<CreateAccountOutput>{
       try {
          return  this.userService.createAccount(createAccountInput);           
       } catch (error) {
           return {
               ok: false,
               error,
           }
       }
   }

   @Mutation(returns => LoginOutput)
     async login(@Args('input') loginInput : LoginInput): Promise<LoginOutput> {
         try {
             return  this.userService.login(loginInput)
         } catch (error) {
             return {
                 ok: false,
                 error,
             };
         }
     }
@Query(returns => User)
 me(
     @Context() context
 ){
     
 }
}