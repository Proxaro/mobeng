import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDo } from 'src/app/model/todo';
import { TodoService } from 'src/app/services/todo.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  constructor(private router: Router, private toDoService: TodoService, public alertController: AlertController) { }

  public allToDos: ToDo[] = [];
  public newToDo: ToDo = new ToDo();

  ngOnInit() {
    this.reloadAllToDos();
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }

  async finish(toDo: ToDo) {
    toDo.archived = true;
    this.updateToDo(toDo);
  }

  public updateToDo(toDo: ToDo) {
    this.toDoService.updateToDo(toDo).subscribe(
      data => {
        console.log("Successfully updated todo.");
        this.reloadAllToDos();
      }, err => {
        console.log(err);
        this.router.navigateByUrl('/login');
      }
    );
  }
  
  //refresh todos
  async doRefresh(event) {
    this.reloadAllToDos();
    event.target.complete();
  }

  //on todo edit button
  async edit(toDo: ToDo) {
    this.router.navigate(['/tabs/edittodo', toDo[0]]);
  }

  public reloadAllToDos() {
    this.toDoService.getAllToDos().subscribe(
      data => {
        this.allToDos = data;
      }, err => {
        console.log(err);
        this.router.navigateByUrl('/login');
      }
    );
  }

}
