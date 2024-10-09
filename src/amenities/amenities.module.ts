import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AmenitiesService } from './amenities.service';
import { AmenitiesController } from './amenities.controller';
import { Amenities } from './amenities.entity';
import { ServicesModule } from '../services/services.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Amenities]),
    // forwardRef(() => ServicesModule),  
  ],
  providers: [AmenitiesService],
  controllers: [AmenitiesController],
  exports: [AmenitiesService], 
})
export class AmenitiesModule {}
