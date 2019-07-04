import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.page.html',
  styleUrls: ['./newproject.page.scss'],
})
export class NewprojectPage implements OnInit {

  constructor(private router: Router, private userService: UserService, private activatedRoute:ActivatedRoute) { }

  public users: User;

  ngOnInit() {
    this.loadProject();
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