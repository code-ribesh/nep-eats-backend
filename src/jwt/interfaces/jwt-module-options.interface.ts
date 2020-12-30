import { string } from "joi"

export interface JwtModuleOptions {
    tokenSecret: string;
}