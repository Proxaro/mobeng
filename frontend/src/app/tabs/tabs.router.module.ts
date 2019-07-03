import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'todo',
        children: [
          {
            path: '',
            loadChildren: './todo/todo.module#TodoPageModule'
          }
        ]
      },
      {
        path: 'projects',
        children: [
          {
            path: '',
            loadChildren: './projects/projects.module#ProjectsPageModule'
          }
        ]
      },
      {
        path: 'timerecord',
        children: [
          {
            path: '',
            loadChildren: './timerecord/timerecord.module#TimerecordPageModule'
          }
        ]
      },
      {
        path: 'newproject',
        children: [
          {
            path: '',
            loadChildren: './newproject/newproject.module#NewprojectPageModule'
          }
        ]
      },
      {
        path: 'newtask',
        children: [
          {
            path: '',
            loadChildren: './newtask/newtask.module#NewtaskPageModule'
          }
        ]
      },
      {
        path: 'editproject',
        children: [
          {
            path: '',
            loadChildren: './editproject/editproject.module#EditprojectPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/timerecord',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/timerecord',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
