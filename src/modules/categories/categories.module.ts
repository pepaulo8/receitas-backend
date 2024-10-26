import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { Models } from '@/db/models.db';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [CategoriesController],
  imports: [SequelizeModule.forFeature(Models)],
  providers: [CategoriesService],
})
export class CategoriesModule {}
