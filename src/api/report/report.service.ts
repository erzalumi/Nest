/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/createReport.dto';
import { UpdateReportDto } from './dto/updateReport.dto';
import { Report } from './entities/report.entity';
import { ReportRepository } from './repository/report.repository';

@Injectable()
export class ReportService {
  constructor(private readonly reportRepository: ReportRepository) {}

  async getProject(): Promise<Report[]> {
    return await this.reportRepository.getReport();
  }

  async createReport(createReport: CreateReportDto): Promise<Report> {
    return await this.reportRepository.createReport(createReport);
  }

  async getReportById(reportId: string): Promise<Report> {
    return await this.reportRepository.getReportById(reportId);
  }

  async updateReport(
    uuid: string,
    updateReportDto: UpdateReportDto,
  ): Promise<Report> {
    return await this.reportRepository.updateReport(uuid, updateReportDto);
  }

  async removeReport(reportId: string): Promise<void> {
    return await this.reportRepository.removeReport(reportId);
  }
}
