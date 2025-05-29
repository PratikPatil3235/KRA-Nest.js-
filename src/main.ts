import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';

async function bootstrap() {
  const PORT = process.env.PORT;
  const app = await NestFactory.create(RootModule);
  await app.listen(PORT ?? 3000);
}
bootstrap();
