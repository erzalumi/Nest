/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entities';
import { ProjectRepository } from './repository/project.repository';


@Injectable()
export class ProjectService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async getProject(): Promise<Project[]> {
    return await this.projectRepository.getProject();
  }

  async createProject(createProjectDto : CreateProjectDto): Promise<Project>{
    return await this.projectRepository.createProject(createProjectDto);
  }

  async getProjectById(projectId: string) :Promise<Project>{
    return await this.projectRepository.getProjectById(projectId)
  }

  async updateProject(uuid: string, updateProjectDto : UpdateProjectDto) : Promise<Project>{
    return await this.projectRepository.updateProject(uuid,updateProjectDto)
  }

  async removeProject(projectId:string) : Promise<void>{
    return await this.projectRepository.removeProject(projectId);
  }
}