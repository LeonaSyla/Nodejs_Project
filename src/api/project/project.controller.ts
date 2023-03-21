/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { ApiTags } from '@nestjs/swagger';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Public } from '../../common/decorators/public.decorator';
import {  CreateProjectDto } from './dtos/create-project.dto';


@UseGuards(new RolesGuard())
@ApiTags('Project')
@Controller('Project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}


  @Public()
  @Get()
  async getProject(): Promise<Project[]> {
    return await this.projectService.getProject();
  }

  @Public()
  @Post()
  async createProject(@Body() projectDto: CreateProjectDto): Promise<Project> {
    return await this.projectService.createProject(projectDto);
  }
  
  @Public()
  @Put(':id')
async updateProject(
  @Param('id', ParseIntPipe) id: string,
  @Body() project: CreateProjectDto,
): Promise<Project> {
  return await this.projectService.updateProject(id, project);
  }

 @Public()
    @Get(':id')
    async getProjectById(@Param('id') id : string) : Promise<Project>{
      return await this.projectService.getProjectById(id);
    }

    @Public()
    @Delete(':id')
    async removeProject(@Param('id') id:string) : Promise<void>{
      return await this.projectService.removeProject(id);
    }

    @Public()
    @Post(':id/users/:userId')
    async addUserToProject(@Param('id') projectId: string, @Param('userId') userId: string): Promise<void> {
    return await this.projectService.addUserToProject(projectId, userId);
    }
    
}


