/* eslint-disable prettier/prettier */
import { Project } from 'src/api/project/entities/project.entities';
import { User } from 'src/api/user/entities/user.entity';
import { AuditEntity } from 'src/common/db/customBaseEntites/AuditEntity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { FileType } from '../enums/FileType.enum';

@Entity('reports')
export class Report extends AuditEntity {
  
  @Column()
  name: string;

  @Column()
  url: string

  @Column({
        type: 'enum',
        enum: FileType,
        default: FileType.PDF
    })
  fileType: FileType; 


  @ManyToOne(() => User, (user) => user.reports)
  user: User;

  @ManyToOne(() => Project, (project) => project.reports)
  project: Project;
}
