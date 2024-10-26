import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Models } from '@/db/models.db';

@Module({
  controllers: [RecipesController],
  imports: [SequelizeModule.forFeature(Models)],
  providers: [RecipesService],
})
export class RecipesModule {}
