import { IsBoolean, IsArray, IsOptional, IsString } from 'class-validator';

export class UpdateRoomDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsBoolean()
  @IsOptional()
  isThirdParty?: boolean;

  @IsArray()
  @IsOptional()
  amenities?: number[]; 
}
