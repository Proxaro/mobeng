import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../model/project';
import { ProjectList } from '../../model/projectList';
import { ProjectService } from '../../services/project.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  constructor(private toastController: ToastController, private router: Router, private projectService: ProjectService, public alertController: AlertController) { }

  public allProjects: ProjectList[] = [];

  percent: number;

  ngOnInit() {
    this.reloadAllProjects();
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }

  //on project finish button
  async finish(project: Project) {
    console.log('Project Finished');
    project.archived = true;
    this.projectService.updateProject(project).subscribe(
      data => {
        this.presentToast("YAY! Project completed", "success");
        this.reloadAllProjects();
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

  //refresh projects
  async doRefresh(event) {
    this.reloadAllProjects();
    event.target.complete();
  }

  //on project edit button
  async edit(project: Project) {
    this.router.navigate(['/tabs/editproject', project.id]);
  }

  public reloadAllProjects() {
    this.projectService.getAllProjects().subscribe(
      data => {
        this.allProjects = data;
      }, err => {
        console.log(err);
        this.router.navigateByUrl('/login');
      }
    );
  }

}
