/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { CustomRepository } from '../../../common/db/decorators/CustomRepository.decorator';
import { Project } from '../entities/project.entity';
import { IProjectRepository } from '../interfaces/project.repository.interface';
import { BaseCustomRepository } from '../../../common/db/customBaseRepository/BaseCustomRepository';
import { CreateProjectDto } from '../dtos/create-project.dto';
import { HttpException, UnprocessableEntityException } from '@nestjs/common';
import { UpdateProjectDto } from '../dtos/update-project.dto';
import { User } from 'src/api/user/entities/user.entity';

@CustomRepository(Project)
export class ProjectRepository
  extends BaseCustomRepository<Project>
  implements IProjectRepository
{
  async getProject(): Promise<Project[]> {
    return await this.find();
  }

  async saveProject(project: CreateProjectDto): Promise<Project> {
    const newProject = this.create(project);
    await this.save(newProject);
    return newProject;
  }

  async updateProject(id:string, data: UpdateProjectDto) :Promise<Project>{
    const project = this.getProjectById(id);
    if(!project){
        throw new HttpException('Project does not exist',404);
    }
    await this.update({uuid:id},data)
    const updated = this.getProjectById(id);
    return updated;
  }

  async getProjectById(projectId:string):Promise<Project>{
    const project = await this.findOneBy({uuid : projectId})
         if (!project) {
        throw new UnprocessableEntityException('This project does not exist!');
        }
        return project;
  }

  async removeProject(projectId: string): Promise<void> {
    const project = await this.findOneBy({uuid:projectId})
    await this.delete(project.id);
  }

  async addUserToProject(projectId:string, userId: string) :Promise<void>{
    const project = await this.getProjectById(projectId)
    const user = await this.manager.findOne(User, { where :{uuid: userId}})

    project.users.push(user);
    await this.save(project);
  }
}
