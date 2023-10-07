import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeormService } from './services/typeorm/typeorm.service';
import { ProductService } from './services/product/product.service';
import { ProductController } from './controller/product/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './models/products.module';
import { CourseController } from './controller/course/course.controller';
import { CourseService } from './services/course/course.service';
import { Courses } from './models/course.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({useClass: TypeormService}),
    TypeOrmModule.forFeature([Products,Courses]),
  ],
  controllers: [AppController, ProductController, CourseController],
  providers: [AppService, TypeormService, ProductService, CourseService],
})
export class AppModule {}
