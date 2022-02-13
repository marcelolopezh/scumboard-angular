import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../interfaces/project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectServiceService {
  httpClient: HttpClient;
  projectList: Project[];
  url: string = 'http://localhost:8080/getAllProjects';

  constructor(private http: HttpClient) {
  }

  public getProjects():Observable<any> {
    return this.http.get(this.url)
  }


}
