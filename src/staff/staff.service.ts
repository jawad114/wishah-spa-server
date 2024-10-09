// src/staff/staff.service.ts
import { Injectable,NotFoundException, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Staff } from './staff.entity';
import { CreateStaffDto } from './dto/staff.dto';
import { UpdateStaffDto } from './dto/update.dto';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Staff)
    private readonly staffRepository: Repository<Staff>,
  ) {}



  async update(id: number, updateStaffDto: UpdateStaffDto): Promise<Staff> {
    const staff = await this.staffRepository.findOne({ where: { id } });

    if (!staff) {
      throw new NotFoundException(`Staff member with ID ${id} not found`);
    }

    // Update the staff properties
    Object.assign(staff, updateStaffDto);
    return this.staffRepository.save(staff);
  }
  async create(createStaffDto: CreateStaffDto): Promise<Staff> {
    const staff = this.staffRepository.create(createStaffDto);
    return this.staffRepository.save(staff);
  }

  async findAll(): Promise<Staff[]> {
    return this.staffRepository.find();
  }

  async findOne(id: number): Promise<Staff> {
    return this.staffRepository.findOne({ where: { id } });
  }
  

  async remove(id: number): Promise<void> {
    await this.staffRepository.delete(id);
  }
}
