import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { SeeUserComponent } from './see-user/see-user.component';
import { SignupComponent } from './signup/signup.component';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  { path: 'sign-up', component: SignupComponent },
  { path: 'all-users', component: SeeUserComponent },
];

@NgModule({
  declarations: [SignupComponent, SeeUserComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormField,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class UserModule { }
