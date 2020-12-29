import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resturant } from './entities/resturant.entity';
import { ResturantResolver } from './resturant.resolver';
import { ResturantService } from './resturants.service';

@Module({
    imports: [TypeOrmModule.forFeature([Resturant])],
    providers: [
        ResturantResolver,
        ResturantService
    ]
})
export class ResturantModule {}
