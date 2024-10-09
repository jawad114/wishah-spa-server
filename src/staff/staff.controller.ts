// src/staff/staff.controller.ts
import {
    Controller,
    Post,
    Get,
    Param,
    Body,
    Delete,
    UseInterceptors,
    UploadedFile,
    Put,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { StaffService } from './staff.service';
  import { CreateStaffDto } from './dto/staff.dto';
  import { diskStorage } from 'multer';
  import { extname } from 'path';
  import { UpdateStaffDto } from './dto/update.dto';
  import { Staff } from './staff.entity';
  @Controller('staff')
  export class StaffController {
    constructor(private readonly staffService: StaffService) {}
  
    @Post('create')
    @UseInterceptors(
      FileInterceptor('image', {
        storage: diskStorage({
          destination: './uploads', 
          filename: (req, file, callback) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            const ext = extname(file.originalname);
            callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
          },
        }),
      }),
    )
    async create(@UploadedFile() file: Express.Multer.File, @Body() createStaffDto: CreateStaffDto) {
      createStaffDto.image = file.path; 
      return this.staffService.create(createStaffDto);
    }
  
    @Get()
    async findAll() {
      return this.staffService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number) {
      return this.staffService.findOne(id);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: number) {
      return this.staffService.remove(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updateStaffDto: UpdateStaffDto): Promise<Staff> {
      return this.staffService.update(id, updateStaffDto);
    }
  }
  