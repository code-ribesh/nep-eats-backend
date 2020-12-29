import { ArgsType, Field, InputType, Int, PartialType } from "@nestjs/graphql";
import { CreateResturantDto } from "./create-resturants.dto";

@InputType()
export class UpdateResturantInputType extends PartialType(CreateResturantDto){}

@InputType()
export class UpdateResturantDto{
    @Field(type => Number)
    id: number;

    @Field(type =>  UpdateResturantInputType)
    data: UpdateResturantInputType;
}