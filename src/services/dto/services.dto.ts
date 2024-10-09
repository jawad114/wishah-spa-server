// src/services/dto/create-service.dto.ts
import { IsString, IsDecimal, IsOptional, IsArray, IsNumber } from 'class-validator';

export class CreateServiceDto {
  @IsString()
  serviceName: string;

  @IsDecimal()
  servicePrice: number;

  @IsString()
  requiredTherapist: string;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true }) // Accept an array of amenity IDs
  amenities: number[]; // List of selected amenity IDs
}
