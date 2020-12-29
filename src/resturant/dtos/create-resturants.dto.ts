import {Field, InputType, OmitType } from "@nestjs/graphql";
import { Resturant } from "../entities/resturant.entity";

@InputType()
export class CreateResturantDto extends OmitType(Resturant, ['id']){}