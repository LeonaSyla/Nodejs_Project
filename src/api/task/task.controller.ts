/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators/public.decorator';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { Task } from './entities/task.entity';
import { TaskService } from './task.service';

@UseGuards(new RolesGuard())
@ApiTags('Task')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Public()
  @Get()
  async getTask(): Promise<Task[]> {
    return await this.taskService.getTask();
  }

  @Public()
  @Post()
  async createTask(@Body() taskDto: CreateTaskDto): Promise<Task> {
    return await this.taskService.createTask(taskDto);
  }

  @Public()
  @Put(':id')
  async updateTask(
    @Param('id') id: string,
    @Body() data: UpdateTaskDto,
  ): Promise<Task> {
    return await this.taskService.updateTask(id, data);
  }

  @Public()
  @Delete(':id')
  async removeTask(@Param('id') id: string): Promise<void> {
    return await this.taskService.removeTask(id);
  }
}