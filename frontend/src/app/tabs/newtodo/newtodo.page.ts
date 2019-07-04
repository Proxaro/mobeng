import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';


@Component({
  selector: 'app-newtodo',
  templateUrl: './newtodo.page.html',
  styleUrls: ['./newtodo.page.scss'],
})
export class NewtodoPage implements OnInit {

  number: number;
  color: string;

  constructor(private router: Router, private userService: UserService, private activatedRoute: ActivatedRoute) { }

  public users: User;
  
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
    this.loadProject();
    this.onRangeChangeHandler()
  }

  public loadProject() {

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
}
