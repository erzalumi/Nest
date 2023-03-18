/* eslint-disable prettier/prettier */
import { Project } from '../entities/project.entities';
import { IBaseCustomRepository } from '../../../common/db/customBaseRepository/interfaces/BaseCustomRepository.interface';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';


export interface IProjectRepository extends IBaseCustomRepository<Project> {
    getProject() : Promise<Project[]>

    createProject(data: CreateProjectDto) : Promise<Project>

    getProjectById(projectId:string):Promise<Project>
    
    updateProject(id:string, data:UpdateProjectDto) :Promise<Project>

    removeProject(projectId: string): Promise<void> 
}
