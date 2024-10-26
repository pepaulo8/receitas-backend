import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Recipe } from './entities/recipe.entity';
import { Op } from 'sequelize';

@Injectable()
export class RecipesService {
  constructor(@InjectModel(Recipe) private recipeModel: typeof Recipe) {}

  async create(createRecipeDto: CreateRecipeDto) {
    const recipe = await this.recipeModel.create({ ...createRecipeDto });
    return recipe;
  }
  async findAll(req: any, filter?: string) {
    console.log({ user: req.user });
    const whereCondition = filter
      ? {
          [Op.or]: [
            {
              nome: {
                [Op.like]: `%${filter}%`,
                // Aqui, a collation deve ser aplicada no seu modelo Recipe para ignorar acentuação
                // collate: 'utf8mb4_general_ci',
              },
            },
            {
              modo_preparo: {
                [Op.like]: `%${filter}%`,
                // collate: 'utf8mb4_general_ci',
              },
            },
            {
              ingredientes: {
                [Op.like]: `%${filter}%`,
                // collate: 'utf8mb4_general_ci',
              },
            },
          ],
        }
      : {};

    return await this.recipeModel.findAll({
      where: { id_usuarios: req.user.id, ...whereCondition },
    });
  }

  async findOne(id: number) {
    const recipe = await this.recipeModel.findByPk(id);
    if (!recipe) {
      throw new NotFoundException(`Recipe with id ${id} not found`);
    }
    return recipe;
  }

  async update(id: number, updateRecipeDto: UpdateRecipeDto) {
    const recipe = await this.findOne(id); // Verifica se a receita existe
    await recipe.update(updateRecipeDto); // Atualiza com os novos dados
    return recipe;
  }

  async remove(id: number) {
    const recipe = await this.findOne(id); // Verifica se a receita existe
    await recipe.destroy(); // Remove a receita
    return { message: `Recipe with id ${id} removed successfully` };
  }
}
