import { DataSourceOptions } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

ConfigModule.forRoot();

const config: DataSourceOptions = {
  type: 'mysql',
  host: process.env.TYPEORM_HOST,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  migrations: ['src/chat/migration/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  synchronize: true,
  migrationsRun: true,
  logging: true,
  
};

export = config;