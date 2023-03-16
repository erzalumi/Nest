/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { IsUrl, IsNotEmpty, Validate, IsOptional } from 'class-validator';
import { ProjectType } from '../enums/projectTypes.enum';



export class IsUrlUnique {
    async validate(url: string) {
        const project = await Project.findOne({ where: { url } });
        return !project;
    }
}

@Entity()
export class Project extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 36 })
  @IsOptional()
  @ApiProperty()
  uuid: string;

  @Column({ type: 'int' })
  @IsOptional()
  @ApiProperty()
  user_id: number;

  @Column({ type: 'varchar', length: 255 })
  @IsUrl()
  @IsNotEmpty()
  @Validate(IsUrlUnique, { message: 'URL already exists' })
  url: string;

  @Column({ type: 'varchar', length: 255 })
  @IsOptional()
  @ApiProperty()
  name: string;

  @Column({ type: 'varchar', length: 50, enum: ProjectType })
  @IsOptional()
  @ApiProperty()
  type: ProjectType;

  @Column({ type: 'date' })
  @IsOptional()
  @ApiProperty()
  created_at: Date;

  @Column({ type: 'date' })
  @IsOptional()
  @ApiProperty()
  updated_at: Date;

  @Column({ type: 'date', nullable: true })
  @IsOptional()
  @ApiProperty()
  deleted_at: Date;
}

