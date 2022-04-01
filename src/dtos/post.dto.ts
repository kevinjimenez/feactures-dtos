import {
  IsNotEmpty,
  IsInt,
  IsDefined,
  Equals,
  NotEquals,
  IsIn,
  IsNotIn,
  IsDate,
  IsNumber,
  IsArray,
  IsEnum,
  IsDivisibleBy,
  IsPositive,
  IsNegative,
  Min,
  Max,
  MinDate,
  MaxDate,
  ValidateIf,
} from 'class-validator';

export class PostDto {
  // @IsNotEmpty()
  // @IsInt()
  // readonly id: number;
  //
  // @IsDefined()
  // readonly defined: number;
  //
  // @Equals(1)
  // readonly equals: 1;
  //
  // @NotEquals(1)
  // readonly notEquals: number;
  //
  // @IsIn([1, 2])
  // readonly in: 0 | 1;
  //
  // @IsNotIn([1, 2])
  // readonly inNot: number;
  //
  // //* Se puede config el nuemro de decimales, ademas se puder perimit NaN e infinitos
  // @IsNumber({ maxDecimalPlaces: 2 })
  // readonly numero: number;
  //
  // @IsArray()
  // readonly array: number[];
  //
  // @IsEnum({ 0: 'inactivo', 1: 'activo' })
  // readonly enums: number[];
  //
  // @IsDivisibleBy(1)
  // readonly divisibleBy: number;
  //
  // @IsPositive()
  // readonly numberPositive: number;
  //
  // @IsNegative()
  // readonly numberNegative: number;
  //
  // @Min(2)
  // readonly numberMin: number;
  //
  // @Max(3)
  // readonly numberMax: number;
  //
  // @MinDate(new Date())
  // readonly minDate: Date;
  // @MaxDate(new Date(Date.now()))
  // readonly maxDate: Date;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  readonly priceMin: number;

  //* Valida si exite el priceMin y si es mayor a cero, si no cumple no pide el priceMax
  @ValidateIf((o) => o.priceMin > 0)
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  readonly priceMax: number;

  // @IsDate()
  // readonly date: number;
}
