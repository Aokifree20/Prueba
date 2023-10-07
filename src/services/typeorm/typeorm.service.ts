import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist';

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory{
    createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        return{
            // type: 'mysql',
            // host: 'localhost',
            // port: 3307,
            // username: 'user_crud',
            // password: 'root',
            // database: 'db_crud',
            // autoLoadEntities: true,
            // synchronize: true,
            type: 'mysql',
            host: '38.17.53.105',
            port: 18485,
            username: 'admin',
            password: 'm9O6RXdU',
            database: 'db_ecorp',
            autoLoadEntities: true,
            synchronize: true,
        };
    }
}
