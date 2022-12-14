import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Employees/login/login.component';
import { RegistrationComponent } from './Components/Employees/registration/registration.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },
 

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
