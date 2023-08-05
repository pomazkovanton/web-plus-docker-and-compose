import { HashModule } from './../hash/hash.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';

import { DatabaseConfig } from '../../configs/database.config';
import { config } from '../../configs/config';

import { AppController } from './app.controller';

import { UsersModule } from '../users/users.module';
import { WishesModule } from '../wishes/wishes.module';
import { WishlistsModule } from '../wishlists/wishlists.module';
import { OffersModule } from '../offers/offers.module';
import { AuthModule } from '../auth/auth.module';
import { loggerConfig } from 'src/configs/logger.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
    WinstonModule.forRoot(loggerConfig),
    UsersModule,
    WishesModule,
    WishlistsModule,
    OffersModule,
    AuthModule,
    HashModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
