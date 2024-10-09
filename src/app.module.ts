import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { User } from './user/user.entity';
import { ServicesModule } from './services/services.module';
import { Services } from './services/services.entity';
import { AmenitiesController } from './amenities/amenities.controller';
import { AmenitiesModule } from './amenities/amenities.module';
import { Amenities } from './amenities/amenities.entity';
import { ServicesController } from './services/services.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { Product } from './products/products.entity';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { RoomModule } from './rooms/rooms.module';
import { Room } from './rooms/rooms.entity';
import { StaffModule } from './staff/staff.module';
import { Staff } from './staff/staff.entity';
@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345',
      database: 'nestjs',
      entities: [User, Services, Amenities, Product,Room,Staff], 
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    ServicesModule,
    AmenitiesModule,
    ProductsModule,
    RoomModule,
    StaffModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
