import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './login/auth/auth.component';
import {HeaderComponent} from './Admin_side/header/header.component';
import {AddUserComponent} from './user/add-user/add-user.component';
import {AddProfilComponent} from './profile/add-profil/add-profil.component';
import {ListeProfileComponent} from './profile/liste-profile/liste-profile.component';


const routes: Routes = [
  { path: 'login', component : AuthComponent},
  { path: 'header', component : HeaderComponent},
  { path: 'add_user', component : AddUserComponent},
  { path: 'add_profile', component: AddProfilComponent},
  { path: 'liste_profile', component: ListeProfileComponent},
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
