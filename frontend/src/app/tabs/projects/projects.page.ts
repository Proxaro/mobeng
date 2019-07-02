import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../model/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  constructor(private router: Router, private projectService: ProjectService) { }

  public allProjects: Project[] = [];
  public newProject: Project = new Project();

  ngOnInit() {
    this.reloadAllProjects();
  }

  public reloadAllProjects() {
    this.projectService.getAllProjects().subscribe(
      data => {
        this.allProjects = data;
      }, err => {
        console.log(err);
        this.router.navigateByUrl('/login');
      }
    );
  }

}
