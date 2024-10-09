import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { Services } from './services.entity';
import { AmenitiesModule } from '../amenities/amenities.module';
import { AmenitiesService } from 'src/amenities/amenities.service';
import { Amenities } from 'src/amenities/amenities.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Services, Amenities]),
    // forwardRef(() => AmenitiesModule),
    AmenitiesModule
  ],
  providers: [ServicesService],
  controllers: [ServicesController],
  exports: [ServicesService], 
})
export class ServicesModule {}
