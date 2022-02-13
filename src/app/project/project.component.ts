import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from '../services/project-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projectList:any = [];
  constructor(public projectService:ProjectServiceService, private router:Router) { 
  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(projects =>{
      this.projectList = projects
    })
  }
  public details(id){
    this.router.navigate(['projects/'+id]);
  }
}
