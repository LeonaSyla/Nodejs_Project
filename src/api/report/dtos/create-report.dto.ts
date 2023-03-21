/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsOptional, IsString } from "class-validator";
import { FileType } from "../enums/filetype.enum";

export class CreateReportDto{

    @IsString()
    @ApiProperty()
    name:string

    @IsString()
    @ApiProperty()
    url:string

    @IsEnum(FileType)
    @ApiProperty()
    filetype : FileType

}
