
import { Module,forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { LoginUserDto } from 'src/auth/dto/login.dto';
import { CreateUserDto } from 'src/auth/dto/register.dto';
import { JwtModule, JwtService } from '@nestjs/jwt';
@Module({
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => AuthModule), ],
  controllers: [UserController],
  providers: [UsersService, AuthService, JwtService],
  exports: [UsersService], 
})
export class UsersModule {}
