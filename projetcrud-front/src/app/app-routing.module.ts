import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SignupComponent } from './pages/user/signup/signup.component';
import { SeeUserComponent } from './pages/user/see-user/see-user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'all-users', component: SeeUserComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
