import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailServiceService {
  url: string = 'http://localhost:8080/getProject/';
  constructor(public http: HttpClient) { }

  getProject(id){
    return this.http.get(this.url+id)
  }
}
