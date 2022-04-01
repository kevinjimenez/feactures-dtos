import { IsDate, IsNotEmpty, IsString, Length } from 'class-validator';

export class CourseDto {
  @IsNotEmpty()
  @IsString()
  @Length(0, 20)
  nombre: string;

  @IsDate()
  fechaInicio: Date;

  @IsDate()
  fechaFin: Date;
}
