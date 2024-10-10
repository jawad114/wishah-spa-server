
import { IsString, IsDecimal, IsOptional, IsArray, IsNumber, isNumber } from 'class-validator';

export class CreateServiceDto {
  @IsString()
  serviceName: string;

  @IsDecimal()
  servicePrice: number;

  @IsString()
  requiredTherapist: string;

  @IsNumber()
  duration: number;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true }) 
  amenities: number[];
}
