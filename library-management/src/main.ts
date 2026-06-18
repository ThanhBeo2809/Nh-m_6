import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // temporary raw route to help debug routing in Remote environment
  const server = app.getHttpAdapter().getInstance();
  try {
    server.post('/rawbooks', (req, res) => {
      res.json({ ok: true, msg: 'rawbooks received' });
    });
  } catch (e) {
    // ignore if adapter doesn't support direct route injection
  }

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
