import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { Models } from '@/db/models.db';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoriesSeedService } from './categories.seed';

@Module({
  controllers: [CategoriesController],
  imports: [SequelizeModule.forFeature(Models)],
  providers: [CategoriesService, CategoriesSeedService],
})
export class CategoriesModule {}
