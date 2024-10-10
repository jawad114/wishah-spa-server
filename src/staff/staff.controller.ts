
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
  import { v4 as uuid } from 'uuid';
  @Controller('staff')
  export class StaffController {
    constructor(private readonly staffService: StaffService) {}
  
    @Post('create')
    @UseInterceptors(
      FileInterceptor('image', {
        storage: diskStorage({
          destination: './uploads',
          filename: (req, file, cb) => {
            const filename: string = `${uuid()}-${file.originalname}`;
            cb(null, filename);
          },
        }),
      }),
    )
    async create(@UploadedFile() file: Express.Multer.File, @Body() createStaffDto: CreateStaffDto) {
      console.log(file)
      console.log(createStaffDto)
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
  