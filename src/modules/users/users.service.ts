import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { genSaltSync, hashSync } from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}
  async create(createUserDto: CreateUserDto) {
    const loginAlreadyExists = await this.userModel.findOne({
      where: { login: createUserDto.login },
    });
    if (loginAlreadyExists) {
      throw new HttpException('Login já existe', HttpStatus.CONFLICT);
    }

    const salt = genSaltSync(10);
    const hashedPassword = hashSync(createUserDto.senha, salt);
    const user = await this.userModel.create({
      ...createUserDto,
      senha: hashedPassword,
    });
    return user.dataValues;
  }

  async findByLogin(login: string): Promise<User | null> {
    return this.userModel.findOne({ where: { login } });
  }
}
