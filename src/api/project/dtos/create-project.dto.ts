/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { ProjectType } from '../enums/types.enum';

export class CreateProjectDto {
  @IsString()
  @ApiProperty()
  url: string;

  @IsString()
  @ApiProperty()
  name: string;

  @IsEnum(ProjectType)
  @ApiProperty()
  type: ProjectType;
  description: any;
}