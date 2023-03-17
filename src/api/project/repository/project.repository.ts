/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { CustomRepository } from '../../../common/db/decorators/CustomRepository.decorator';
import { Project } from '../entities/project.entity';
import { IProjectRepository } from '../interfaces/project.repository.interface';
import { BaseCustomRepository } from '../../../common/db/customBaseRepository/BaseCustomRepository';
import { CreateProjectDto } from '../dtos/create-project.dto';

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

  async updateProject(
    id: number,
    project: Partial<CreateProjectDto>,
  ): Promise<Project> {
    const projectToUpdate = await this.findOneOrFail({ where: { id } });
    this.merge(projectToUpdate, project);
    await this.save(projectToUpdate);
    return projectToUpdate;
  }
}