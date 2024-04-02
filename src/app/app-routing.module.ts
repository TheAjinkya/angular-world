import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { ReactiveFormComponent } from './form-wizard/reactive-form/reactive-form.component';

const routes: Routes = [{path:'dashboard', component: DashboardComponent},
{path:'todo', component: TodoFormComponent},
{path:'registration', component: ReactiveFormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
