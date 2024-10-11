import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule
import { UsersModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { User } from './user/user.entity';
import { ServicesModule } from './services/services.module';
import { Services } from './services/services.entity';
import { AmenitiesModule } from './amenities/amenities.module';
import { Amenities } from './amenities/amenities.entity';
import { ProductsModule } from './products/products.module';
import { Product } from './products/products.entity';
import { RoomModule } from './rooms/rooms.module';
import { Room } from './rooms/rooms.entity';
import { StaffModule } from './staff/staff.module';
import { Staff } from './staff/staff.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'mysql',
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [User, Services, Amenities, Product, Room, Staff],
        synchronize: true,
        logging: true, 
      }),
      inject: [],
    })
    ,
    UsersModule,
    AuthModule,
    ServicesModule,
    AmenitiesModule,
    ProductsModule,
    RoomModule,
    StaffModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
