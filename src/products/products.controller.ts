import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Delete,
    UploadedFile,
    UseInterceptors,
  } from '@nestjs/common';
  import { ProductsService } from './products.service';
  import { CreateProductDto } from './dto/product.dto';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { diskStorage } from 'multer';
  import { v4 as uuid } from 'uuid';
  import { join } from 'path';
  
  @Controller('products')
  export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}
  
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
    create(@UploadedFile() file: Express.Multer.File, @Body() createProductDto: CreateProductDto) {
      createProductDto.imagePath = file.path; // Set the path of the uploaded image
      return this.productsService.create(createProductDto);
    }
  
    @Get()
    findAll() {
      return this.productsService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.productsService.findOne(+id);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.productsService.remove(+id);
    }
  }
  