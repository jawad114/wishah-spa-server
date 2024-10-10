
import { IsEmail, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class UpdateStaffDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsPhoneNumber()
  phoneNumber?: string;

  @IsOptional()
  @IsString()
  designation?: string;

  @IsOptional()
  image?: string; 
}
