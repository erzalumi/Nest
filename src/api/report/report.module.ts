/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CustomRepositoryModule } from 'src/common/db/CustomRepository.module';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';
import { ReportRepository } from './repository/report.repository';

@Module({
  imports: [CustomRepositoryModule.forCustomRepository([ReportRepository])],
  providers: [ReportService],
  controllers: [ReportController],
})
export class ReportModule {}
