import { Inject, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { JwtModuleOptions } from './interfaces/jwt-module-options.interface';
import { CONFIG_OPTIONS } from './jwt.constants';

@Injectable()
export class JwtService {
    constructor (
        @Inject(CONFIG_OPTIONS) private readonly options: JwtModuleOptions
    ){
        console.log(options);
    }
    sign(userId:number): string{
        return jwt.sign({id:userId}, this.options.tokenSecret);
    }
    verify(token:string){
        return jwt.verify(token, this.options.tokenSecret);
    }
}
