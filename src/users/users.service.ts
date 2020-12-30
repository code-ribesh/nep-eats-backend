import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as jwt from 'jsonwebtoken';
import { CreateAccountInput } from "./dtos/create-account.dto";
import { LoginInput } from "./dtos/login.dto";
import { User } from "./entities/user.entity";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly users: Repository<User>,
        private readonly config: ConfigService,
    ){
    }

   async createAccount({email, password, role}: CreateAccountInput) : Promise<{ok:boolean, error?:string}>{
       // check that email does not exits or check new user
       // create new user
        try {
            const exits  =  await this.users.findOne({email});
            if (exits) {
                // make error
                return {ok:false, error:`${email} has already been taken`};
            } 
            await this.users.save(this.users.create({email, password, role}));
            console.log(password)
            return {ok: true};
        }
         catch (error) {
            // make error
            return {ok:false, error:"Couldn't create an account"};
        }
       
   }
  async login({email, password}: LoginInput): Promise<{ok:boolean, error?:string, token?: string}>{
    //find the user with the email
    // check if the password is correct
    // make a jwt token and give it to the user

    try {
        const user = await this.users.findOne({email});
        if(!user){
            return{
               ok: false,
               error: `${email} not found! try creating new account.` 
            };
        }
    const passwordCorrect = await user.checkPassword(password);
    if (!passwordCorrect) {
        return {
            ok: false,
            error: 'Wrong password',
        };
    }
    const token =  jwt.sign({id: user.id}, this.config.get("TOKEN_SECRET"));
    return {
        ok: true,
        token,
    };

    } catch (error) {
        return {
            ok: false,
            error
        }
    }
  }

}