import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* Error: The query handler for the "cbad2186-947e-4420-819f-aad9259c54b6" query was not found! */
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'cats_queue',
      persistent: true,
    },
  });
  await app.startAllMicroservices();
  /* Works without errors only if the following line is set
  await app.listen(3000); */
}
bootstrap();
