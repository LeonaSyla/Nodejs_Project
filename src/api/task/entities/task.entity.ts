/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Project } from "src/api/project/entities/project.entity";
import { User } from "src/api/user/entities/user.entity";
import { AuditEntity } from "src/common/db/customBaseEntites/AuditEntity";
import { Column, Entity, ManyToOne } from "typeorm";
import { Status } from "../enums/status.enum";
import { Type } from "../enums/type.task";

@Entity('tasks')
export class Task extends AuditEntity{

    @Column({nullable: true})
    name: string

    @Column({nullable: true })
    description: string

    @Column()
    deadline: string

    @Column({
        type: 'enum',
        default: Type.DEVELOPING,
        enum: Type
    })
    type: Type

    @Column({
        type: 'enum',
        default: Status.TODO,
        enum: Status
    })
    status: Status

    @ManyToOne(() => User, (user) => user.tasks)
    user: User

    @ManyToOne(() => Project, (project) => project.tasks)
    project: Project
    

}