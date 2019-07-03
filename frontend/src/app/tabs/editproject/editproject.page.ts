import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from '../../model/project';
import { TodoService } from 'src/app/services/todo.service';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.page.html',
  styleUrls: ['./editproject.page.scss'],
})
export class EditprojectPage implements OnInit {

  projectID = null;

  constructor(private router: Router, private projectService: ProjectService, private toDoService: TodoService, private activatedRoute:ActivatedRoute) { }

  public project: Project;

  ngOnInit() {
    this.loadProject();
  }

  public loadProject() {
  
    this.projectID = this.activatedRoute.snapshot.paramMap.get("id");

    this.projectService.getProject(this.projectID).subscribe(
      (project: Project) => {
        this.project = project;
      }, err => {
        console.log(err);
        this.router.navigateByUrl('/');
      }
    );
  }
}
