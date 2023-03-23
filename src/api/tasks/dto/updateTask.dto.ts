/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsOptional, IsString } from "class-validator";
import { TaskStatus } from "../enums/TaskStatus.enum";
import { TaskType } from "../enums/TaskType.enum";


export class UpdateTaskDto {
    @IsOptional()
    @IsString()
    @ApiProperty()
    name: string;

    @IsOptional()
    @IsString()
    @ApiProperty()
    description: string;

    @IsOptional()
    @ApiProperty()
    deadline: string;
    
    @IsOptional()
    @IsEnum(TaskType)
    @ApiProperty()
    TaskType: TaskType;

    @IsOptional()
    @IsEnum(TaskStatus)
    @ApiProperty()
    TaskStatus: TaskStatus;
}
