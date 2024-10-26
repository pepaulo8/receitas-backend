import { Models } from '@/db/models.db';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  imports: [SequelizeModule.forFeature(Models)],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
