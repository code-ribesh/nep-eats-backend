
import { Field, InputType, ObjectType, registerEnumType } from "@nestjs/graphql";
import { CoreEntity } from "src/common/entities/core.entity";
import * as bcrypt from "bcrypt";
import { BeforeInsert, Column, Entity } from "typeorm";
import { InternalServerErrorException } from "@nestjs/common";

enum UserRole { Client, Owner,  Delivery}

registerEnumType(UserRole, {name: "UserRole"})
@InputType({isAbstract: true})
@ObjectType()
@Entity()
export class User extends CoreEntity {
   @Field(type=> String)
   @Column()
   email: string;

   @Field(type=> String)
   @Column()
   password: string;

   @Field(type=> UserRole)
   @Column(
      {
         type: 'enum',
         enum: UserRole
      }
   )
   role: UserRole;

   @BeforeInsert()
  async hashPassword() : Promise<void>{
     try {
      this.password = await bcrypt.hash(this.password, 10);
      console.log(this.password);
        
     } catch (error) {
        console.log(error);
        throw new InternalServerErrorException();
     }
  }
}