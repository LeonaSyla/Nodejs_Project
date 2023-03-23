/* eslint-disable prettier/prettier */
import { AuditEntity } from 'src/common/db/customBaseEntites/AuditEntity';
import { Entity, Column } from 'typeorm';


@Entity()
export class Media extends AuditEntity {
  
  @Column()
  key: string;

  @Column()
  url: string;

  @Column({ 
    type: 'enum',
    enum: MediaType,
    default: MediaType.IMAGE
 })
type: MediaType;
}