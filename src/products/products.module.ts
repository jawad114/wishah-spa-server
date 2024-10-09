import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    
  ],
  providers: [ProductsService],
  controllers: [ProductsController],
  exports: [ProductsService], 
})
export class ProductsModule {}
