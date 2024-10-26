import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './modules/categories/categories.module';
import { RecipesModule } from './modules/recipes/recipes.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      autoLoadModels: true, // Carregar automaticamente os models
      synchronize: true, // Sincronizar o schema com o banco de dados

      dialect: 'mysql',
      host: process.env.DB_HOST, // Definido no .env
      port: Number(process.env.DB_PORT), // Definido no .env
      username: process.env.DB_USERNAME, // Definido no .env
      password: process.env.DB_PASSWORD, // Definido no .env
      database: process.env.DB_DATABASE_NAME, // Nome do banco de dados no .env
      sync: { alter: true }, // Sincronizar com possíveis alterações na estrutura
    }),
    AuthModule,
    UsersModule,
    CategoriesModule,
    RecipesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
