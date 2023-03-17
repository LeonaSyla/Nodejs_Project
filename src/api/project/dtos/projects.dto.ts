/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Column } from 'typeorm';
import { ProjectType } from '../enums/types.enum';

export class CreateProjectDto {
  @Column({ nullable: true })
  url: string;

  @Column()
  name: string;

  @Column({ type: 'enum', nullable: false, enum: ProjectType, default: ProjectType.DEVELOPMENT })
  type: ProjectType;
}