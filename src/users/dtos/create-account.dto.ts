import { Field, ObjectType, PickType } from "@nestjs/graphql";
import { User } from "../entities/user.entity";

export class CreateAccountInput extends PickType(User, ["email", "password", "role"]){

}

@ObjectType()
export class CreateAccountOutput {
    @Field(type => String, {nullable: true})
    error?: string;

    @Field(tpe => Boolean)
    ok:boolean;
}