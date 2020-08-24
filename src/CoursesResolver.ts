import { Resolver, Query, UseMiddleware } from 'type-graphql';
import { Course } from './entity/Course';
import { isAuth } from './isAuth';

@Resolver()
export class CoursesResolver{

  @Query(() => [Course])
  @UseMiddleware(isAuth)
  courses(){
    return Course.find();
  }
}