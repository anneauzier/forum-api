import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';
import { TaskService } from './task/task.service';

@Module({
  imports: [
    AuthModule, 
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    TaskModule
  ],
  controllers: [AppController], 
  providers: [AppService],
})
export class AppModule {}
