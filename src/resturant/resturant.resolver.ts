
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateResturantDto } from "./dtos/create-resturants.dto";
import { Resturant } from "./entities/resturant.entity";

@Resolver(of => Resturant)
export class ResturantResolver{
    @Query(returns => [Resturant])
     resturants(@Args('veganOnly') veganOnly:boolean): Resturant[]{
        console.log(veganOnly);   
        return [];
     }
    @Mutation(returns => Boolean)
    createResturant(
        @Args() createResturantDto: CreateResturantDto
    ) : boolean{
        console.log(createResturantDto);
        return true;
    }
}
