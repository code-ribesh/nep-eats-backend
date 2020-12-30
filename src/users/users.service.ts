import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateAccountInput } from "./dtos/create-account.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly users: Repository<User>
    ){}

   async createAccount({email, password, role}: CreateAccountInput) : Promise<string | undefined>{
       // check that email does not exits or check new user
       // create new user
        try {
            const exits  =  await this.users.findOne({email});
            if (exits) {
                // make error
                return `${email} has already been taken`;
            } 
            await this.users.save(this.users.create({email, password, role}));
              
        }
         catch (error) {
            // make error
            return "Couldn't create an account";
        }
       // hash the password
   }
}