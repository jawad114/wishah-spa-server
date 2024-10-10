

import { Module,forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { UsersModule } from './../user/user.module';

@Module({
  imports: [
   
    JwtModule.register({
      secret: 'your_jwt_secret', 
      signOptions: { expiresIn: '1h' },
    }),
    forwardRef(() => UsersModule), 
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
