import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsBoolean, IsNumber, IsOptional, IsString, Length } from "class-validator";
@InputType({isAbstract: true})
@ObjectType()
@Entity()
export class Resturant {

    @PrimaryGeneratedColumn()
    @Field(type => Number)
    @IsNumber()
    id: number

    @Field(type => String)
    @Column()
    @IsString()
    @Length(5)
    name: string;

    @Field(type => Boolean, {nullable: true})
    @Column({
        default: true
    })
    @IsOptional()
    @IsBoolean()
    isVegan: boolean;

    @Field(type => String)
    @Column()
    @IsString()
    address:string;

    @Field(type => String)
    @Column()
    @IsString()
    ownerName:string;

    @Field(type => String)
    @Column()
    @IsString()
    categoryName:string;
}