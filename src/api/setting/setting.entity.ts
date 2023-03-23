/* eslint-disable prettier/prettier */
import { AuditEntity } from 'src/common/db/customBaseEntites/AuditEntity';
import { Entity, Column } from 'typeorm';


@Entity('setting')
export class Setting extends AuditEntity {
  
  @Column()
  key: string;

  @Column()
  value: string;

}