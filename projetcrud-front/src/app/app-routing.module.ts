import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/user/signup/signup.component';
import { LoginComponent } from './pages/user/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '*', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user',
  loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule) },
  { path: "login", component: LoginComponent },
  { path:'**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [provideRouter(routes)]
})
export class AppRoutingModule { }
