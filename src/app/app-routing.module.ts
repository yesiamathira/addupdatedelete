import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentsComponent} from './students/students.component';
import {LoginComponent} from  './login/login.component';
import {LogoutComponent} from './logout/logout.component';
const routes: Routes = [
  { 
    path: "login",
    component: LoginComponent
    },

{ 
    path: "students",
    component: StudentsComponent
    },
    { 
      path: "logout",
      component: LogoutComponent
      },
     {
       path: "",
       redirectTo:"/login",
       pathMatch:"full"
     }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
