
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class CreateStaffDto {
  @IsNotEmpty()
  image: string; 

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
