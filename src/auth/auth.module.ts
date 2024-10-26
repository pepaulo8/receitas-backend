import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '@/modules/users/users.module';
import { JwtStrategy } from './strategies/jwt.strategy';
import { jwtConstants } from './contants';

@Module({
  imports: [
    UsersModule, // Para validar usuários
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret, // Deve ser definido no .env
      signOptions: { expiresIn: '7d' }, // Token expira em 7 dias
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
