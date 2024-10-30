import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from '../config/jwt.config';

@Module({
  imports: [JwtModule.registerAsync({ useFactory: jwtConfig })],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
