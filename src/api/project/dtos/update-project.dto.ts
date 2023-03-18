/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, Validate } from 'class-validator';
import { IsUnique } from '../../../common/decorators/validation.decorator';
import { Project } from '../entities/project.entity';
import { ProjectType } from '../enums/types.enum';

export class UpdateProjectDto {
  @IsString()
  @IsOptional()
  @Validate(IsUnique, [Project])
  @ApiProperty()
  url: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  name: string;

  @IsEnum(ProjectType)
  @IsOptional()
  @ApiProperty()
  type: ProjectType;
}
