import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist';

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory{
    createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        return{
            type: 'mysql',
            host: 'localhost',
            port: 3307,
            username: 'user_crud',
            password: 'root',
            database: 'db_crud',
            autoLoadEntities: true,
            synchronize: true,
        };
    }
}
