/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { ProjectType } from '../enums/ProjectTypes.enum';

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