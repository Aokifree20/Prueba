import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeormService } from './services/typeorm/typeorm.service';
import { ProductService } from './services/product/product.service';
import { ProductController } from './controller/product/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './models/products.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({useClass: TypeormService}),
    TypeOrmModule.forFeature([Products]),
    CoursesModule
  ],
  controllers: [AppController, ProductController],
  providers: [AppService, TypeormService, ProductService],
})
export class AppModule {}
