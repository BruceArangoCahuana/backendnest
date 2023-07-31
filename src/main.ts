import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Backend Portafolio')
    .setDescription('Documentacion de la api de portafolio')
    .setVersion('1.0')
    .addTag('users')
    .addTag('information')
    .addTag('auth')
    .addTag('redesSociales')
    .addTag('general')
    .addTag('experience')
    .addTag('subgeneral')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3500);
}
bootstrap();
