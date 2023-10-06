import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ProductService } from '../../services/product/product.service';
import { error } from 'console';
import { Products } from 'src/models/products.module';

@Controller('product')
export class ProductController {
    constructor( private productsService: ProductService){

    }

    @Get()
    get(){
        return this.productsService.findAll().then(res=>{
            return{success:true, data: res}
        }).catch(error=>{
            throw new HttpException(error,HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Post()
    save(@Body() product: Products){
        return this.productsService.create(product).then(res=>{
            return{success:true, data: res}
        }).catch(error=>{
            throw new HttpException(error,HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Post('/update')
    update(@Body() product: Products){
        return this.productsService.update(product).then(res=>{
            return{success:true, data: res}
        }).catch(error=>{
            throw new HttpException(error,HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }
    
    @Post('/delete/:id')
    dalete(@Param() id){
        return this.productsService.delete(id).then(res=>{
            return{success:true, data: res}
        }).catch(error=>{
            throw new HttpException(error,HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }
}
