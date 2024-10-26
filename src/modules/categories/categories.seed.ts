import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesSeedService implements OnModuleInit {
  constructor(
    @InjectModel(Category) private readonly categoryModel: typeof Category,
  ) {}

  async onModuleInit() {
    const categories = [
      { id: 1, nome: 'Bolos e tortas doces' },
      { id: 2, nome: 'Carnes' },
      { id: 3, nome: 'Aves' },
      { id: 4, nome: 'Peixes e frutos do mar' },
      { id: 5, nome: 'Saladas, molhos e acompanhamentos' },
      { id: 6, nome: 'Sopas' },
      { id: 7, nome: 'Massas' },
      { id: 8, nome: 'Bebidas' },
      { id: 9, nome: 'Doces e sobremesas' },
      { id: 10, nome: 'Lanches' },
      { id: 11, nome: 'Prato Único' },
      { id: 12, nome: 'Light' },
      { id: 13, nome: 'Alimentação Saudável' },
    ];

    for (const category of categories) {
      await this.categoryModel.findOrCreate({
        where: { id: category.id },
        defaults: category,
      });
    }
  }
}
