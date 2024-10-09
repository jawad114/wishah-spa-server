// src/amenities/dto/create-amenities.dto.ts
import { IsString } from 'class-validator';

export class CreateAmenitiesDto {
  @IsString()
  name: string;
}
