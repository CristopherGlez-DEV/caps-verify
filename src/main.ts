import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { SwaggerTheme, SwaggerThemeNameEnum } from 'swagger-themes';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  const config = new DocumentBuilder()
    .setTitle('Caps Verify API')
    .setDescription('Endpoints para verificación de gorras por drop')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  const theme = new SwaggerTheme();
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true, // mantiene el token si recargas
    },
    customSiteTitle: 'Caps Verify - Docs',
    customCss: theme.getBuffer(SwaggerThemeNameEnum.DARK),
  });

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();
