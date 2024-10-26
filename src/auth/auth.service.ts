import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login-auth.dto';
import { UsersService } from '@/modules/users/users.service';
import { compareSync } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(login: string, senha: string) {
    const user = await this.usersService.findByLogin(login);
    if (user && !compareSync(senha, user.senha)) {
      throw new UnauthorizedException('Invalid login or password');
    }
    return user;
  }

  async login(loginAuthDto: LoginAuthDto) {
    const user = await this.validateUser(
      loginAuthDto.login,
      loginAuthDto.senha,
    );
    const payload = { login: user.login, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
