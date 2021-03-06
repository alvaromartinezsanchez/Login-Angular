import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components
import {SignupComponent} from './components/signup/signup.component';
import {SigninComponent} from './components/signin/signin.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {PrivateTasksComponent} from './components/private-tasks/private-tasks.component';

import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path:'signup', component: SignupComponent },
  { path:'signin', component: SigninComponent },
  { path:'tasks', component: TasksComponent },
  { path:'private', component: PrivateTasksComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
