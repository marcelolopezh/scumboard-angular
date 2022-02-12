import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectServiceService {
  httpClient: HttpClient;
  projectList: Project[];
  url: string = 'http://localhost:8080/getAllProjects';

  constructor(private http: HttpClient) {
    this.loadProjects();
  }

  loadProjects() {
    this.http.get(this.url).subscribe((response: any) => {
      this.projectList = response;
      return this.projectList;
    })
  }
}
