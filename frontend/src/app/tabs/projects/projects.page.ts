import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../model/project';
import { ProjectService } from '../../services/project.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  constructor(private router: Router, private projectService: ProjectService, public alertController: AlertController) { }

  public allProjects: Project[] = [];
  public newProject: Project = new Project();

  ngOnInit() {
    this.reloadAllProjects();
  }

  //on project finish button
  async finish(project: Project){
    console.log('Project Finished');
    project.archived = true;
    this.projectService.updateProject(project).subscribe(
      data => {
        console.log("Successfully updated project.");
        this.reloadAllProjects();
      }, err => {
        console.log(err);
        this.router.navigateByUrl('/login');
      }
    );
  }

  //refresh projects
  async doRefresh(event) {
    this.reloadAllProjects();
    event.target.complete();
  }

  //on project edit button
  async edit(project: Project){
    /*const alert = await this.alertController.create({
      header: 'Edit Project',
      message: 'This will lead to the project edit page of ' + project.title,
      buttons: ['OK']
    });

    await alert.present();*/
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
