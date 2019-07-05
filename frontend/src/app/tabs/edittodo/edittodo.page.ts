import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToDo } from '../../model/todo';
import { User } from '../../model/user';
import { Project } from '../../model/project';
import { UserService } from '../../services/user.service';
import { TodoService } from 'src/app/services/todo.service';
import { ProjectService } from '../../services/project.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.page.html',
  styleUrls: ['./edittodo.page.scss'],
})
export class EdittodoPage implements OnInit {

  number: number = 1;
  color: string;

  toDoID = null;

  constructor(private toastController: ToastController, private router: Router, private projectService: ProjectService, private todoService: TodoService, private userService: UserService, private activatedRoute: ActivatedRoute) { }

  public users: User;
  public toDo: ToDo;
  public projects: Project;

  onRangeChangeHandler() {

    if (this.toDo.prio == 2) {
      this.color = 'primary';

    } else if (this.toDo.prio == 3) {
      this.color = 'warning';

    } else if (this.toDo.prio == 4) {
      this.color = 'danger';

    } else {
      this.color = 'success';

    }

  }

  ngOnInit() {

    this.loadProject();

  }

  public loadProject() {

    this.toDoID = this.activatedRoute.snapshot.paramMap.get("id");

    this.todoService.getToDo(this.toDoID).subscribe(
      (todo: ToDo) => {
        this.toDo = todo;
        this.onRangeChangeHandler();
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

  async presentToast(text: string, type: string){
    const toast = await this.toastController.create({
      message: text,
      duration: 2000,
      color: type
    });
    toast.present();
  }

  //on todo save button
  async save(toDo: ToDo) {
    if (this.toDo.title != null && this.toDo.title != "" && this.toDo.owner != null && this.toDo.owner != "") {
      this.todoService.updateToDo(toDo).subscribe(
        data => {
          this.presentToast("Task has been updated", "success");
          this.router.navigateByUrl('/tabs/todo');
        }, err => {
          console.log(err);
          this.router.navigateByUrl('/login');
        }
      );
    } else{
      this.presentToast("Please provide the required information", "danger");
    }
  }
}
