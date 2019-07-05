import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToDo } from '../model/todo';
import { projectionDef } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient, private router: Router) { }
  private apiUrl: string = 'http://localhost:8080';

  public getAllToDos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(this.apiUrl + '/api/todo', { withCredentials: true });
  }

  public getToDo(toDoID: string): Observable<ToDo> {
    return this.http.get<ToDo>(this.apiUrl + '/api/todo/' + toDoID, { withCredentials: true });
  }

  public addNewToDo(newToDo: ToDo) {
    return this.http.post(this.apiUrl + '/api/todo', newToDo, { withCredentials: true });
  }

  public updateToDo(toDo: ToDo) {
    console.log("###");
    console.log(toDo);
    return this.http.put(this.apiUrl + '/api/todo', toDo, { withCredentials: true });
  }
}