/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseCustomRepository } from 'src/common/db/customBaseRepository/interfaces/BaseCustomRepository.interface';
import { CreateReportDto } from '../dto/createReport.dto';
import { UpdateReportDto } from '../dto/updateReport.dto';
import { Report } from '../entities/report.entity';

export interface IReportRepository extends IBaseCustomRepository<Report> {
    createReport(data: CreateReportDto): Promise<Report>;
    
    getReport(): Promise<Report[]>
    
    getReportById(reportId: string): Promise<Report>

    updateReport(id: string, data: UpdateReportDto): Promise<Report>

    removeReport(reportid: string) : Promise<void>
}
