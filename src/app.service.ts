import { Injectable } from '@nestjs/common';
import { PostDto } from './dtos/post.dto';
import { UserDto } from './dtos/user.dto';
import { CourseDto } from './dtos/course.dto';
import { validate } from 'class-validator';
import { JobDto } from './dtos/job.dto';

@Injectable()
export class AppService {
  createPost(payload: PostDto): string {
    console.log(payload);
    return 'Hello World!';
  }

  async testingUser(): Promise<UserDto | { message: string }> {
    const user = new UserDto();
    user.id = 21;
    user.nombre = 'kevin';
    user.apellido = 'kevin';
    user.edad = 18;
    user.email = 'kivito2009@hotmail.com';
    user.tags = ['1', '2', '3', '4', '5', '5', '6'];
    user.password = '12345678';

    //* si valida
    const job = new JobDto();
    job.empresa = 'qw';
    job.totalEmpleados = -12;
    job.ciudad = 'qwe';

    user.job = job;

    //* No me valido
    // user.job = {
    //   empresa: '1',
    //   ciudad: 'q',
    //   totalEmpleados: -100,
    // };

    const curso = new CourseDto();
    curso.nombre = 'ingles';
    curso.fechaInicio = new Date();
    curso.fechaFin = new Date();

    user.cursos = [curso, curso];
    user.createDate = new Date(Date.now());

    //* Validar el usuario con su dto
    const errorsUser = await validate(user);
    if (errorsUser.length > 0) {
      console.log(errorsUser);
      return { message: 'Payload error' };
    }
    return user;
  }
}
