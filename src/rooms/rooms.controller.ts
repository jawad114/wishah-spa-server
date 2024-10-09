import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { RoomService } from './rooms.service';
import { CreateRoomDto } from './dto/rooms.dto';
import { UpdateRoomDto } from './dto/updateroom.dto';
import { Room } from './rooms.entity';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomService) {}

  // Create a new room
  @Post()
  async create(@Body() createRoomDto: CreateRoomDto): Promise<Room> {
    return this.roomsService.create(createRoomDto);
  }

  // Retrieve all rooms
  @Get()
  async findAll(): Promise<Room[]> {
    return this.roomsService.findAll();
  }

  // Retrieve a room by ID
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Room> {
    return this.roomsService.findOne(+id); // convert id to number
  }

  // Update a room by ID
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRoomDto: UpdateRoomDto,
  ): Promise<Room> {
    return this.roomsService.update(+id, updateRoomDto);
  }

  // Delete a room by ID
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.roomsService.remove(+id);
  }
}
