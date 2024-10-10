
import { Controller, Post, Get, Param, Body, Delete } from '@nestjs/common';
import { AmenitiesService } from './amenities.service';
import { CreateAmenitiesDto } from './dto/amenities.dto';
import { Amenities} from './amenities.entity';

@Controller('amenities')
export class AmenitiesController {
  constructor(private readonly amenitiesService: AmenitiesService) {}

  @Post('create')
  async create(@Body() createAmenitiesDto: CreateAmenitiesDto): Promise<Amenities> {
    return this.amenitiesService.createAmenity(createAmenitiesDto);
  }

  @Get()
  async findAll(): Promise<Amenities[]> {
    return this.amenitiesService.findAllAmenities();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Amenities> {
    return this.amenitiesService.findAmenityById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.amenitiesService.deleteAmenity(id);
  }
}
