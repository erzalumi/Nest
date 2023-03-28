/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsString } from "class-validator";
import { FileType } from "../enums/FileType.enum";

export class CreateReportDto{

    @IsString()
    @ApiProperty()
    name: string;

    @IsString()
    @ApiProperty()
    url: string;

    @IsEnum(FileType)
    @ApiProperty()
    fileType: FileType;
}