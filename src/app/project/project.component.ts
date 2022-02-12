import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from '../services/project-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  titulo:string = "First Project"
  description:string = "A Test Project Data Binding, ScrumBoard Management Platform Project under Scrum Metology"
  projectList:any;
  constructor(public projectService:ProjectServiceService, private router:Router) { 
    this.projectList=this.projectService.loadProjects();
  }

  ngOnInit(): void {
  }

}
