import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors({
    origin: 'http://localhost:3000', // Substitua pelo domínio do seu frontend
    credentials: true,
  });
  await app.listen(3333);
}
bootstrap();
