import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoomDto } from './dto/rooms.dto';
import { UpdateRoomDto } from './dto/updateroom.dto';
import { Room } from './rooms.entity';
import { Amenities } from './../amenities/amenities.entity';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
    @InjectRepository(Amenities)
    private readonly amenityRepository: Repository<Amenities>,
  ) {}

  async create(createRoomDto: CreateRoomDto): Promise<Room> {
    const room = new Room();
    room.name = createRoomDto.name;
    room.isThirdParty = createRoomDto.isThirdParty;
    const amenities = await this.amenityRepository.findByIds(createRoomDto.amenities);
    room.amenities = amenities;
    return this.roomRepository.save(room);
  }

  async findAll(): Promise<Room[]> {
    return this.roomRepository.find({ relations: ['amenities'] });
  }

  async findOne(id: number): Promise<Room> {
    const room = await this.roomRepository.findOne({
        where: { id },
        relations: ['amenities'],
      });
      
    if (!room) {
      throw new NotFoundException(`Room with ID ${id} not found`);
    }
    return room;
  }

  async update(id: number, updateRoomDto: UpdateRoomDto): Promise<Room> {
    const room = await this.findOne(id);
    if (updateRoomDto.amenities) {
      room.amenities = await this.amenityRepository.findByIds(updateRoomDto.amenities);
    }
    Object.assign(room, updateRoomDto);
    return this.roomRepository.save(room);
  }

  async remove(id: number): Promise<void> {
    const room = await this.findOne(id);
    await this.roomRepository.remove(room);
  }
}
