/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { AuditEntity } from '../../../common/db/customBaseEntites/AuditEntity';
import { TaskStatus } from '../enums/TaskStatus.enum';
import { TaskType } from '../enums/TaskType.enum';
import { Project } from 'src/api/project/entities/project.entities';

@Entity('tasks')
export class Task extends AuditEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  deadline: string;

  @Column({
    type: 'enum',
    enum: TaskType,
    default: TaskType.DEVELOPMENT,
  })
  type: TaskType;

  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.NEW,
  })
  status: TaskStatus;


  @ManyToOne(() => User, (user) => user.tasks)
  @JoinColumn()
  user: User;

  @ManyToOne(() => Project, (project) => project.tasks)
  @JoinColumn()
  project: Project;
}

