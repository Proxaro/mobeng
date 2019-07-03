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
        path: 'newproject',
        children: [
          {
            path: '',
            loadChildren: './newproject/newproject.module#NewprojectPageModule'
          }
        ]
      },
      {
        path: 'newtodo',
        children: [
          {
            path: '',
            loadChildren: './newtodo/newtodo.module#NewtodoPageModule'
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
        path: 'edittodo',
        children: [
          {
            path: '',
            loadChildren: './edittodo/edittodo.module#EdittodoPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/todo',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/todo',
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
