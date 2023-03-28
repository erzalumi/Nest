/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators/public.decorator';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { CreateReportDto } from './dto/createReport.dto';
import { UpdateReportDto } from './dto/updateReport.dto';
import { Report } from './entities/report.entity';
import { ReportService } from './report.service';

@UseGuards(new RolesGuard())
@ApiTags('reports')
@Controller('reports')
export class ReportController {
    constructor(private readonly reportService: ReportService) {}


  @Public()
  @Get()
  async getReport(): Promise<Report[]> {
    return await this.reportService.getProject();
  }

  @Public()
  @Post()
  async createReport(@Body() data: CreateReportDto) {
    return await this.reportService.createReport(data);
  }

  @Public()
  @Get(':id')
  async getReportById(@Param('id') id: string): Promise<Report> {
    return await this.reportService.getReportById(id);
  }

  @Public()
  @Put(':id')
  async updateProject(
    @Param('id') id: string,
    @Body() data: UpdateReportDto,
  ): Promise<Report> {
    return await this.reportService.updateReport(id, data);
  }

  @Public()
  @Delete(':id')
  async removeProject(@Param('id') id: string): Promise<void> {
    return await this.reportService.removeReport(id);
  }
}
