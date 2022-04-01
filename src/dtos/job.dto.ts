import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class JobDto {
  @IsNotEmpty()
  @IsString()
  empresa: string;

  @IsNotEmpty()
  @IsString()
  ciudad: string;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  totalEmpleados: number;
}
