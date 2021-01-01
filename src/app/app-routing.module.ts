import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './login/auth/auth.component';
import {HeaderComponent} from './Admin_side/header/header.component';
import {AddUserComponent} from './user/add-user/add-user.component';
import {AddProfilComponent} from './profile/add-profil/add-profil.component';
import {ListeProfileComponent} from './profile/liste-profile/liste-profile.component';
import {ListeUserComponent} from './user/liste-user/liste-user.component';
import {ListeProfileSortieComponent} from './profileSortie/liste-profile-sortie/liste-profile-sortie.component';
import {AddGroupeCompetenceComponent} from './groupe_competence/add-groupe-competence/add-groupe-competence.component';
import {ListeGroupeCompetenceComponent} from './groupe_competence/liste-groupe-competence/liste-groupe-competence.component';
import {AddCompetenceComponent} from './competence/add-competence/add-competence.component';
import {ListeCompetenceComponent} from './competence/liste-competence/liste-competence.component';


const routes: Routes = [
  { path: 'login', component : AuthComponent},
  { path: 'header', component : HeaderComponent, children: [
      { path: 'liste_profile', component: ListeProfileComponent},
      { path: 'liste_user', component: ListeUserComponent},
      { path : 'liste_profile_sortie', component: ListeProfileSortieComponent},
      { path : 'liste_groupe_competence', component: ListeGroupeCompetenceComponent},
      { path : 'liste_competence' , component: ListeCompetenceComponent},
      { path : 'add_competence' , component: AddCompetenceComponent}
    ]},
  { path: 'add_groupe_competence', component: AddGroupeCompetenceComponent},
  { path : 'add_competence', component: AddCompetenceComponent},
  { path : 'liste_profile-sortie', component: ListeProfileSortieComponent},
  { path: 'add_user', component : AddUserComponent},
  { path: 'add_profile', component: AddProfilComponent},
  { path: 'liste_user', component: ListeUserComponent},
  { path: 'liste_groupe_competence', component: ListeGroupeCompetenceComponent},
  { path : 'liste_competence' , component: ListeCompetenceComponent},
  // default route
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
