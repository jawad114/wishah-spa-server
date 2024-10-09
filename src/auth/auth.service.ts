// src/auth/auth.service.ts

import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './../user/user.service';
import { CreateUserDto } from './dto/register.dto';
import { LoginUserDto } from './dto/login.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const user = await this.usersService.createUser(createUserDto);
    return { email: user.email };
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.usersService.findUserByEmail(loginUserDto.email);
    const isPasswordValid = await bcrypt.compare(loginUserDto.password, user.password);
    
    if (!isPasswordValid) {
      throw new NotFoundException('Invalid credentials');
    }

    const token = this.jwtService.sign({ email: user.email });
    console.log(token);
    return { token };
  }
}
