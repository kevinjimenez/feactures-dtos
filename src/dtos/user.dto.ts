import {
  IsArray,
  IsDate,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
  Max,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CourseDto } from './course.dto';
import { JobDto } from './job.dto';

export class UserDto {
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsString()
  @Length(3, 15)
  nombre: string;

  @IsString()
  @Length(3, 20)
  apellido: string;

  @IsString()
  @Length(8, 16)
  password: string;

  @IsInt()
  @Min(18)
  @Max(30)
  edad: number;

  @IsEmail()
  email: string;

  @MaxLength(20, {
    each: true,
  })
  tags: string[];

  @IsNotEmpty()
  @ValidateNested()
  job: JobDto;

  //* Valida para cada item del arreglo
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CourseDto)
  cursos: CourseDto[];

  @IsDate()
  createDate: Date;
}
