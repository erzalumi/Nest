/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { FileType } from '../enums/FileType.enum';

export class UpdateReportDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  url: string;

  @IsEnum(FileType)
  @IsOptional()
  @ApiProperty()
  filetype: FileType;
}
