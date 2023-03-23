/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "./dto/createTask.dto";
import { UpdateTaskDto } from "./dto/updateTask.dto";
import { Task } from "./entities/task.entity";
import { TaskRepository } from "./repository/task.repository";

@Injectable()
export class TaskService{
    constructor(private readonly taskRepository: TaskRepository){}

   async getTasks(): Promise<Task[]>{
    return await this.taskRepository.getTasks();
   }

   async createTask(data: CreateTaskDto): Promise<Task>{
    return await this.taskRepository.createTask(data)
   }

   async getTaskById(taskId: string): Promise<Task>{
    return await this.taskRepository.getTasksById(taskId)
   }

   async updateTask(taskId: string, data: UpdateTaskDto){
    return await this.taskRepository.updateTask(taskId, data)
   }

   async removeTask(taskId: string): Promise<void>{
    return await this.taskRepository.removeTask(taskId)
   }
}