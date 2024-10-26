import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import { User } from '@/modules/users/entities/user.entity';
import { Category } from '@/modules/categories/entities/category.entity';

@Table({
  tableName: 'receitas',
  indexes: [
    {
      unique: false,
      fields: [
        // Índice composto para os 3 campos para melhorar performance do filtro
        { name: 'nome' },
        { name: 'modo_preparo', length: 100 },
        { name: 'ingredientes', length: 100 },
      ],
    },
  ],
})
export class Recipe extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  id_usuarios: number;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: true,
  })
  id_categorias: number;

  @Column({
    type: DataType.STRING(45),
    allowNull: true,
  })
  nome: string;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: true,
  })
  tempo_preparo_minutos: number;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: true,
  })
  porcoes: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  modo_preparo: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  ingredientes: string;

  @CreatedAt
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  criado_em: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  alterado_em: Date;

  // Define as relações com o model Usuario e Categoria
  @BelongsTo(() => User)
  usuario: User;

  @BelongsTo(() => Category)
  categoria: Category;
}
