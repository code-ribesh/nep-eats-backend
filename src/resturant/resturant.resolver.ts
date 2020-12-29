
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateResturantDto } from "./dtos/create-resturants.dto";
import { UpdateResturantDto } from "./dtos/update-resturant.dto";
import { Resturant } from "./entities/resturant.entity";
import { ResturantService } from "./resturants.service";

@Resolver(of => Resturant)
export class ResturantResolver{
    constructor(private readonly resturantService: ResturantService){
        
    }
    @Query(returns => [Resturant])
     resturants(): Promise<Resturant[]>{  
        return this.resturantService.getAll();
     }
    @Mutation(returns => Boolean)
    async createResturant(
        @Args('input') createResturantDto: CreateResturantDto
    ) :Promise<boolean>{
        try {
            await this.resturantService.createResturant(createResturantDto);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    @Mutation(returns => Boolean)
      async updateRestaurant(
          @Args('input') updateRestaurantDto : UpdateResturantDto,
      ) {}
}
