/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Project } from '../entities/project.entity';
import { IBaseCustomRepository } from '../../../common/db/customBaseRepository/interfaces/BaseCustomRepository.interface';
import { CreateProjectDto } from '../dtos/projects.dto';

export interface IProjectRepository extends IBaseCustomRepository<Project> {
  getProject(): Promise<Project[]>;
  saveProject(project: CreateProjectDto);
  updateProject(id: number, project: CreateProjectDto): Promise<Project>;
}