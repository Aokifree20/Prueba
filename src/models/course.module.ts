import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Courses {
    
    @PrimaryGeneratedColumn()
    curso_id:number;

    @Column()
    curso_nombre:string;

    @Column()
    curso_fecha_inicio:string;

    @Column()
    curso_duracion:number;

    @Column()
    curso_precio_soles_anterior:number;

    @Column()
    curso_precio_soles:number;

    @Column()
    curso_precio_dolar_anterior:number;

    @Column()
    curso_precio_dolar:number;
    
    @Column()
    curso_imagen:string;

}
