/* eslint-disable prettier/prettier */
import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Injectable, Param, Post, Put, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiBearerAuth, ApiProperty, ApiTags } from "@nestjs/swagger";
import { Public } from "src/common/decorators/public.decorator";
import { RolesGuard } from "src/common/guards/roles.guard";
import { CreateTaskDto } from "./dto/createTask.dto";
import { UpdateTaskDto } from "./dto/updateTask.dto";
import { Task } from "./entities/task.entity";
import { TaskService } from "./task.service";

@UseGuards(new RolesGuard())
@ApiBearerAuth()
@ApiTags('tasks')
@UsePipes(new ValidationPipe())
@UseInterceptors(ClassSerializerInterceptor)
@Controller('task')
@Injectable()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Public()
  @Get('')
  @ApiProperty()
  async getTasks(): Promise<Task[]> {
    return await this.taskService.getTasks();
  }

  @Public()
  @Post()
  @ApiProperty()
  createTask(@Body() data: CreateTaskDto) {
    return this.taskService.createTask(data);
  }

  @Public()
  @Get(':id')
  @ApiProperty()
  async getTaskById(@Param('id') id: string): Promise<Task> {
    return await this.taskService.getTaskById(id);
  }

  @Public()
  @Put(':id')
  @ApiProperty()
  async updateTask(
    @Param('id') id: string,
    @Body() data: UpdateTaskDto,
  ): Promise<Task> {
    return await this.taskService.updateTask(id, data);
  }

  @Public()
  @Delete(':id')
  @ApiProperty()
  async removeTask(@Param('id') id: string): Promise<void> {
    return await this.taskService.removeTask(id);
  }
}
