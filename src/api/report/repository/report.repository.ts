/* eslint-disable prettier/prettier */
import { HttpException, UnprocessableEntityException } from '@nestjs/common';
import { BaseCustomRepository } from 'src/common/db/customBaseRepository/BaseCustomRepository';
import { CreateReportDto } from '../dto/createReport.dto';
import { UpdateReportDto } from '../dto/updateReport.dto';
import { Report } from '../entities/report.entity';
import { IReportRepository } from '../interfaces/report.interface';

export class ReportRepository
  extends BaseCustomRepository<Report>
  implements IReportRepository {
  
    async createReport(createReport: CreateReportDto): Promise<Report>{
        const newReport = this.create(createReport);
        await this.save(createReport);

        return newReport;
    } 

    async getReport(): Promise<Report[]>{
        return await this.find();
    }

    async getReportById(reportId: string): Promise<Report>{
        const report = await this.findOneBy({uuid: reportId})
        if(!report){
            throw new UnprocessableEntityException('This process does not exist!');
        }
        return report;
    }

    async updateReport(id: string, data: UpdateReportDto) : Promise<Report>{
            const report = this.getReportById(id);

            if(!report){
                throw new HttpException('Project does not exist!', 404);
            }
            await this.update({uuid: id}, data)
            const updated = this.getReportById(id);

            return updated ;   
        }


    async removeReport(projectId: string): Promise<void>{
        const report = await this.findOneBy({uuid:projectId})
        await this.delete(report.id);
    }



  
}
