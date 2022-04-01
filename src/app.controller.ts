import {
  Body,
  Controller,
  Get,
  ParseArrayPipe,
  ParseBoolPipe,
  Post,
  Query,
  SerializeOptions,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { PostDto } from './dtos/post.dto';
import { UserDto } from './dtos/user.dto';
import { JobDto } from './dtos/job.dto';
import { CourseDto } from './dtos/course.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async testingUser(): Promise<UserDto | { message: string }> {
    return this.appService.testingUser();
  }

  @Post()
  @UsePipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {},
      //* Borra las propiedades que no existen en el dto
      whitelist: true,
    }),
  )
  createPost(@Body() payload: PostDto): string {
    return this.appService.createPost(payload);
  }

  @Post('jobs')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {},
      //* Borra las propiedades que no existen en el dto
      whitelist: true,
    }),
  )
  createManyJobs(
    @Body(
      //* Nos ayuda a validar un array de objetos mediante su Dto
      new ParseArrayPipe({ items: JobDto }),
    )
    payload: JobDto[],
  ) {
    console.log(payload);
    return 'This action adds new users';
  }

  @Get('course')
  // @UsePipes(
  //   new ValidationPipe({
  //     transform: true,
  //     transformOptions: {},
  //     //* Borra las propiedades que no existen en el dto
  //     whitelist: true,
  //   }),
  // )
  getCourse(@Query('sort', ParseBoolPipe) sort: boolean) {
    console.log(sort);
    return 'This action adds new users';
  }

  @Get('courses')
  // @UsePipes(
  //   new ValidationPipe({
  //     transform: true,
  //     transformOptions: {},
  //     //* Borra las propiedades que no existen en el dto
  //     whitelist: true,
  //   }),
  // )
  getCourses(@Query('course', new ValidationPipe()) course: CourseDto) {
    console.log(course);
    return 'This action adds new users';
  }

  //* User serialize
  @SerializeOptions({
    excludePrefixes: ['_'],
  })
  @Get(':id')
  getOne() {}
}
