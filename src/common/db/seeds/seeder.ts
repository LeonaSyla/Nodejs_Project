/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { TypeOrmModule } from '@nestjs/typeorm';
import { seeder } from 'nestjs-seeder';
import { DataSourceOptions } from 'typeorm';
import { config } from '../dataSource/data-source.config';
import { UsersSeeder } from './users/create-users.seed';
import { RolesSeeder } from './roles/create-role.seed';

seeder({
  imports: [TypeOrmModule.forRoot(config as DataSourceOptions)],
}).run([ RolesSeeder]);

