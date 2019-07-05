import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { TodoService } from '../../services/todo.service';
import { User } from '../../model/user';
import { ToDo } from 'src/app/model/todo';
import { Project } from '../../model/project';
import { ToastController } from '@ionic/angular';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-newtodo',
  templateUrl: './newtodo.page.html',
  styleUrls: ['./newtodo.page.scss'],
})
export class NewtodoPage implements OnInit {

  constructor(private toastController: ToastController, private projectService: ProjectService, private toDoService: TodoService, private router: Router, private userService: UserService, private activatedRoute: ActivatedRoute) { }

  public users: User;
  public newToDo: ToDo = new ToDo();
  public projects: Project;

  number: number = 1;
  color: string;

  onRangeChangeHandler() {

    if (this.newToDo.prio == 2) {
      this.color = 'primary';

    } else if (this.newToDo.prio == 3) {
      this.color = 'warning';

    } else if (this.newToDo.prio == 4) {
      this.color = 'danger';

    } else {
      this.color = 'success';

    }

  }

  ngOnInit() {
    this.onRangeChangeHandler();

    this.projectService.getProjects().subscribe(
      (projects: Project) => {
        this.projects = projects;
      }, err => {
        console.log(err);
        this.router.navigateByUrl('/');
      }
    );

    this.userService.getUsers().subscribe(
      (users: User) => {
        this.users = users;
        this.onRangeChangeHandler();
      }, err => {
        console.log(err);
        this.router.navigateByUrl('/login');
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

  async addToDo() {
    console.log(this.newToDo);
    if (this.newToDo.title != null && this.newToDo.title != "" && this.newToDo.owner != null && this.newToDo.owner != "") {
      this.toDoService.addNewToDo(this.newToDo).subscribe(
        data => {
          this.newToDo = new ToDo();
          this.presentToast("Task has been added", "success");
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
