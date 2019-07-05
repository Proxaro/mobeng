import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToDo } from '../../model/todo';
import { User } from '../../model/user';
import { Project } from '../../model/project';
import { UserService } from '../../services/user.service';
import { TodoService } from 'src/app/services/todo.service';
import { ProjectService } from '../../services/project.service';


@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.page.html',
  styleUrls: ['./edittodo.page.scss'],
})
export class EdittodoPage implements OnInit {

  number: number = 1;
  color: string;

  toDoID = null;

  constructor(private router: Router, private projectService: ProjectService, private todoService: TodoService, private userService: UserService, private activatedRoute: ActivatedRoute) { }

  public users: User;
  public toDo: ToDo;
  public projects: Project;

  onRangeChangeHandler() {

    if (this.number <= 1) {
      this.color = 'success';

    } else if (this.number == 2) {
      this.color = 'primary';

    } else if (this.number == 3) {
      this.color = 'warning';

    } else {
      this.color = 'danger';
    }

  }

  ngOnInit() {
    this.onRangeChangeHandler()
    this.loadProject();
    
  }

  public loadProject() {

    this.toDoID = this.activatedRoute.snapshot.paramMap.get("id");

    this.todoService.getToDo(this.toDoID).subscribe(
      (todo: ToDo) => {
        this.toDo = todo;
        console.log(this.toDo);
      }, err => {
        console.log(err);
        this.router.navigateByUrl('/');
      }
    );

    this.userService.getUsers().subscribe(
      (users: User) => {
        this.users = users;
      }, err => {
        console.log(err);
        this.router.navigateByUrl('/');
      }
    );

    this.projectService.getProjects().subscribe(
      (projects: Project) => {
        this.projects = projects;
      }, err => {
        console.log(err);
        this.router.navigateByUrl('/');
      }
    );
  }
}
