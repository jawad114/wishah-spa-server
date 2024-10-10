import { IsString, IsNotEmpty, IsDecimal } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDecimal()
  price: number;

  @IsString()
  imagePath: string;
}
