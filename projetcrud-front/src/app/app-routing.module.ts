import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddUserComponent } from './pages/user/add-user/add-user.component';

const routes: Routes = [
  { path: '*', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: "add-user",
    loadChildren: () => import("./pages/user/user-routing.module").then(module => module.UsersRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
