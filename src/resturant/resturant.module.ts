import { Module } from '@nestjs/common';
import { ResturantResolver } from './resturant.resolver';

@Module({
    providers: [
        ResturantResolver
    ]
})
export class ResturantModule {}
