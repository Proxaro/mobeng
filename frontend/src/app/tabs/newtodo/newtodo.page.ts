import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { TodoService } from '../../services/todo.service';
import { User } from '../../model/user';
import { ToDo } from 'src/app/model/todo';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-newtodo',
  templateUrl: './newtodo.page.html',
  styleUrls: ['./newtodo.page.scss'],
})
export class NewtodoPage implements OnInit {

  constructor(private toastController: ToastController, private toDoService: TodoService, private router: Router, private userService: UserService, private activatedRoute: ActivatedRoute) { }

  public users: User;
  public newToDo: ToDo = new ToDo();
  number: number;
  color: string;
  
  onRangeChangeHandler() {

    number: this.number = 1;
      
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
    this.onRangeChangeHandler();
    this.userService.getUsers().subscribe(
      (users: User) => {
        this.users = users;
        console.log(this.users);
      }, err => {
        console.log(err);
        this.router.navigateByUrl('/login');
      }
    );
  }

  async presentToast(){
    console.log("test");
    const toast = await this.toastController.create({
      message: 'New ToDo has been added',
      duration: 2000,
      color: "success"
    });
    toast.present();
  }

  async addToDo(){
    console.log(this.newToDo);
    if (this.newToDo.title != null && this.newToDo.title != "") {
      this.toDoService.addNewToDo(this.newToDo).subscribe(
        data => {
          this.newToDo = new ToDo();
          this.presentToast();
        }, err => {
          console.log(err);
          this.router.navigateByUrl('/login');
        }
      );
    }
  }
}
