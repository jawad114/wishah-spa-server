// src/services/services.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Services } from './services.entity';
import { CreateServiceDto } from './dto/services.dto';
import { Amenities } from '../amenities/amenities.entity';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Services)
    private readonly serviceRepository: Repository<Services>,
    @InjectRepository(Amenities) 
    private readonly amenitiesRepository: Repository<Amenities>,
  ) {}

  async createService(createServiceDto: CreateServiceDto): Promise<Services> {
    const { serviceName, servicePrice, requiredTherapist, amenities } = createServiceDto;

    // Fetch the selected amenities based on IDs
    const amenitiesList = await this.amenitiesRepository.findByIds(amenities);

    const service = this.serviceRepository.create({
      serviceName,
      servicePrice,
      requiredTherapist,
      amenities: amenitiesList, // Associate the amenities with the service
    });

    return this.serviceRepository.save(service);
  }

  async findAllServices(): Promise<Services[]> {
    return this.serviceRepository.find({ relations: ['amenities'] }); // Include amenities in the response
  }

  async findServiceById(id: number): Promise<Services> {
    const service = await this.serviceRepository.findOne({
      where: { id },
      relations: ['amenities'], // Include amenities in the response
    });
    if (!service) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
    return service;
  }

  async updateService(id: number, updateServiceDto: CreateServiceDto): Promise<Services> {
    const { amenities, ...updateData } = updateServiceDto;

    const service = await this.findServiceById(id);
    const amenitiesList = await this.amenitiesRepository.findByIds(amenities);

    this.serviceRepository.merge(service, updateData);
    service.amenities = amenitiesList;

    return this.serviceRepository.save(service);
  }

  async deleteService(id: number): Promise<void> {
    const service = await this.serviceRepository.findOne({ where: { id } });

    if (!service) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }

    await this.serviceRepository.delete(id);
  }

  async findAllAmenities(): Promise<Amenities[]> {
    return this.amenitiesRepository.find(); // Fetch all amenities
  }
}
