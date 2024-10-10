
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Amenities } from './amenities.entity';
import { CreateAmenitiesDto } from './dto/amenities.dto';

@Injectable()
export class AmenitiesService {
  constructor(
    @InjectRepository(Amenities)
    private readonly amenitiesRepository: Repository<Amenities>,
  ) {}

  async createAmenity(createAmenitiesDto: CreateAmenitiesDto): Promise<Amenities> {
    const amenity = this.amenitiesRepository.create(createAmenitiesDto);
    return this.amenitiesRepository.save(amenity);
  }

  async findAllAmenities(): Promise<Amenities[]> {
    return this.amenitiesRepository.find();
  }

  async findAmenityById(id: number): Promise<Amenities> {
    const amenity = await this.amenitiesRepository.findOne({ where: { id } });
    if (!amenity) {
      throw new NotFoundException(`Amenity with ID ${id} not found`);
    }
    return amenity;
  }

  async deleteAmenity(id: number): Promise<void> {
    const result = await this.amenitiesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Amenity with ID ${id} not found`);
    }
  }
}
