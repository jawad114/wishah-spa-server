import { IsBoolean, IsNotEmpty, IsArray, IsString } from 'class-validator';

export class CreateRoomDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  isThirdParty: boolean;

  @IsArray()
  amenities: number[];
}
