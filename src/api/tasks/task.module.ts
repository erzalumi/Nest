/* eslint-disable prettier/prettier */
import { CustomRepositoryModule } from "src/common/db/CustomRepository.module";
import { TaskService } from "./task.service";
import { TaskRepository } from "./repository/task.repository";
import { TaskController } from "./task.controller";
import { Module } from "@nestjs/common";

@Module({
    imports: [CustomRepositoryModule.forCustomRepository([TaskRepository])],
    providers: [TaskService],
    controllers: [TaskController],
  })
  export class TaskModule {}