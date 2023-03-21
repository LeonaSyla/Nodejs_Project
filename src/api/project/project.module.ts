/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { ProjectRepository } from './repository/project.repository';
import { CustomRepositoryModule } from '../../common/db/CustomRepository.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    CustomRepositoryModule.forCustomRepository([ProjectRepository]),
    UserModule,
  ],
  providers: [ProjectService],
  controllers: [ProjectController],
  exports: [ProjectService],
})
export class ProjectModule {}