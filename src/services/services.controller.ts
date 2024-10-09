// src/services/services.controller.ts
import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/services.dto';
import { Services } from './services.entity';
import { Amenities } from '../amenities/amenities.entity';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post('create')
  async create(@Body() createServiceDto: CreateServiceDto): Promise<Services> {
    return this.servicesService.createService(createServiceDto);
  }

  @Get()
  async findAll(): Promise<Services[]> {
    return this.servicesService.findAllServices();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Services> {
    return this.servicesService.findServiceById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateServiceDto: CreateServiceDto,
  ): Promise<Services> {
    return this.servicesService.updateService(id, updateServiceDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.servicesService.deleteService(id);
  }

  @Get('amenities')
  async findAllAmenities(): Promise<Amenities[]> {
    return this.servicesService.findAllAmenities(); // Fetch all amenities
  }
}
