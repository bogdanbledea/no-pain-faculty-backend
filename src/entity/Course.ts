import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
@Entity('courses')
export class Course extends BaseEntity{
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  idCourse: number;

  @Field()
  @Column()
  courseName: string;
}