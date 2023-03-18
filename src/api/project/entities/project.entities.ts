/* eslint-disable prettier/prettier */
import { User } from 'src/api/user/entities/user.entity';
import { AuditEntity } from 'src/common/db/customBaseEntites/AuditEntity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { ProjectType } from '../enums/projectTypes.enum';

@Entity('projects')
export class Project extends AuditEntity{

    @Column({ unique: true }) 
    url: string;

    @Column()
    name: string;

    @Column({ 
        type: 'enum',
        enum: ProjectType,
        default: ProjectType.OTHER
    })
    type: ProjectType;

    @ManyToMany(() => User)
    @JoinTable()
    users: User[];
}