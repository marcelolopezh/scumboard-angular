import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectDetailServiceService } from '../services/project-detail-service.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project:any;

  constructor(public projectDetailService:ProjectDetailServiceService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get('id')
    this.projectDetailService.getProject(id).subscribe(project => {
      this.project = project;
    })
  }

}
