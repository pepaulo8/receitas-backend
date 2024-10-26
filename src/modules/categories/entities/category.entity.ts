import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'categorias', timestamps: false })
export class Category extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: true,
    unique: true,
  })
  nome: string;
}
