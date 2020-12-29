import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateResturantDto } from "./dtos/create-resturants.dto";
import { Resturant } from "./entities/resturant.entity";


@Injectable()
export class ResturantService{
    constructor(@InjectRepository(Resturant) private readonly restaurants: Repository<Resturant>){}
    getAll(): Promise<Resturant[]> {
     // here we need to talk to database
      return this.restaurants.find();
    }

    createResturant(createResturantDto: CreateResturantDto): Promise<Resturant>{
      const newRestaurant = this.restaurants.create(createResturantDto)
      return this.restaurants.save(newRestaurant);
    }
};