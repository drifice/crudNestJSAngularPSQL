import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'sign-up', component:SignupComponent}
];

@NgModule({
  declarations: [SignupComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class UserModule { }
