import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from '../../model/project';
import { User } from '../../model/user';
import { TodoService } from 'src/app/services/todo.service';
import { ProjectService } from '../../services/project.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.page.html',
  styleUrls: ['./editproject.page.scss'],
})
export class EditprojectPage implements OnInit {

  projectID = null;

  constructor(private router: Router, private projectService: ProjectService, private userService: UserService, private toDoService: TodoService, private activatedRoute:ActivatedRoute) { }

  public project: Project;
  public users: User;

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
    this.userService.getUsers().subscribe(
      (users: User) => {
        this.users = users;
        console.log(this.users);
      }, err => {
        console.log(err);
        this.router.navigateByUrl('/');
      }
    );
  }

  //on project save button
  async save(project: Project){
    this.projectService.updateProject(project).subscribe(
      data => {
        this.router.navigateByUrl('/tabs/projects');
      }, err => {
        console.log(err);
        this.router.navigateByUrl('/login');
      }
    );
  }
}
