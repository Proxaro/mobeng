import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ProjectService } from '../../services/project.service';
import { User } from '../../model/user';
import { Project } from 'src/app/model/project';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.page.html',
  styleUrls: ['./newproject.page.scss'],
})
export class NewprojectPage implements OnInit {

  constructor(private toastController: ToastController, private router: Router, private userService: UserService, private projectService: ProjectService) { }

  public users: User;
  public newProject: Project = new Project();

  ngOnInit(){
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
      message: 'New Project has been added',
      duration: 2000,
      color: "success"
    });
    toast.present();
  }

  async addProject(){
    if (this.newProject.title != null && this.newProject.title != "") {
      this.projectService.addNewProject(this.newProject).subscribe(
        data => {
          this.newProject = new Project();
          this.presentToast();
        }, err => {
          console.log(err);
          this.router.navigateByUrl('/login');
        }
      );
    }
  }

}