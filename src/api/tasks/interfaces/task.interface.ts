/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseCustomRepository } from "src/common/db/customBaseRepository/interfaces/BaseCustomRepository.interface";
import { CreateTaskDto } from "../dto/createTask.dto";
import { UpdateTaskDto } from "../dto/updateTask.dto";
import { Task } from "../entities/task.entity";

export interface ITaskRepository extends IBaseCustomRepository<Task>{
    getTasks():Promise<Task[]>

    saveTask(task: CreateTaskDto);

    createTask(data: CreateTaskDto): Promise<Task>

    getTasksById(taskId: string ):Promise<Task>

    updateTask(taskId:string , data:UpdateTaskDto): Promise<Task>

    removeTask(taskId:string) :Promise<void>
}