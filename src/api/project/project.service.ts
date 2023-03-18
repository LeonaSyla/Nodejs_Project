/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ProjectRepository } from './repository/project.repository';
import { Project } from './entities/project.entity';
import {  CreateProjectDto } from './dtos/create-project.dto';
import {  UpdateProjectDto } from './dtos/update-project.dto';


@Injectable()
export class ProjectService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async getProject(): Promise<Project[]> {
    return await this.projectRepository.getProject();
  }

  async createProject(projectDto: CreateProjectDto): Promise<Project> {
    return await this.projectRepository.saveProject(projectDto);
  }

  

  async getProjectById(projectId: string) :Promise<Project>{
    return await this.projectRepository.getProjectById(projectId)
  }

  async updateProject(projectId: string, updateProjectDto : UpdateProjectDto) : Promise<Project>{
    return await this.projectRepository.updateProject(projectId,updateProjectDto)
  }

  async removeProject(projectId:string) : Promise<void>{
    return await this.projectRepository.removeProject(projectId);
  }
  
}