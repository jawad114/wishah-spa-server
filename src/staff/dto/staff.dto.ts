// src/staff/dto/create-staff.dto.ts
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class CreateStaffDto {
  @IsNotEmpty()
  image: string; // We will handle the image separately

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsPhoneNumber(null)
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  designation: string;
}
