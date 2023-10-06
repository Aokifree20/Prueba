import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from 'src/models/products.module';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Products) private productsRepository: Repository<Products>)
    {
        
    }

    async findAll(){
        return await this.productsRepository.find();
    }

    async findbyId(id: number){
        return await this.productsRepository.findOneBy({id});
    }

    async create(product: Products){
        return await this.productsRepository.save(product);
    }
    async update(product: Products){
        return await this.productsRepository.save(product);
    }

    async delete(id:number){
        await this.productsRepository.delete(id);
        return 'OK';
    }
}
