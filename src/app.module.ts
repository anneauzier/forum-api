import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AuthModule, 
    UserModule, 
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule],
  controllers: [], 
  providers: [],
})
export class AppModule {}
