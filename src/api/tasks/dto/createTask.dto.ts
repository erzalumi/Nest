/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { TaskStatus } from '../enums/TaskStatus.enum';
import { TaskType } from '../enums/TaskType.enum';

export class CreateTaskDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  description: string;

  @IsEnum(TaskType)
  @ApiProperty()
  type: TaskType;

  @IsEnum(TaskStatus)
  @ApiProperty()
  status: TaskStatus;

  @IsString()
  @ApiProperty()
  deadline: string;
}
