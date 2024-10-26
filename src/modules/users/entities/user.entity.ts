import {
  Column,
  CreatedAt,
  DataType,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({ tableName: 'usuarios' })
export class User extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: true,
  })
  nome: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true,
  })
  login: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  senha: string;

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
}
