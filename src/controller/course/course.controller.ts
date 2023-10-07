import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { Courses } from 'src/models/course.module';
import { CourseService } from 'src/services/course/course.service';

@Controller('course')
export class CourseController {
    constructor( private coursesService: CourseService){

    }

    @Get('listacursos')
    getListCourses(){
        const listCourses = this.coursesService.findListCourses();
        return listCourses.then(res=>{
            return{success:true, data: res}
        }).catch(error=>{
            throw new HttpException(error,HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Get()
    get(){
        return this.coursesService.findAll().then(res=>{
            return{success:true, data: res}
        }).catch(error=>{
            throw new HttpException(error,HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Post()
    save(@Body() course: Courses){
        return this.coursesService.create(course).then(res=>{
            return{success:true, data: res}
        }).catch(error=>{
            throw new HttpException(error,HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Post('/update')
    update(@Body() course: Courses){
        return this.coursesService.update(course).then(res=>{
            return{success:true, data: res}
        }).catch(error=>{
            throw new HttpException(error,HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }
    
    @Post('/delete/:id')
    delete(@Param() id){
        return this.coursesService.delete(id).then(res=>{
            return{success:true, data: res}
        }).catch(error=>{
            throw new HttpException(error,HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }
 
}
