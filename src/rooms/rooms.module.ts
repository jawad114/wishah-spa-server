import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsController} from './rooms.controller';
import { RoomService } from './rooms.service';
import { Room } from './rooms.entity';
import { Amenities } from './../amenities/amenities.entity';
import { AmenitiesModule } from 'src/amenities/amenities.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([Room, Amenities]),
    // forwardRef(() => AmenitiesModule),
    AmenitiesModule
  ],
  providers: [RoomService],
  controllers: [RoomsController],
  exports: [RoomService], 
})
export class RoomModule {}
