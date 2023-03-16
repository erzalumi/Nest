/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseCustomRepository } from 'src/common/db/customBaseRepository/interfaces/BaseCustomRepository.interface';
import { Project } from '../entities/project.entities';

export interface IProjectRepository extends IBaseCustomRepository<Project> {}
