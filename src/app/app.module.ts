import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DemoMaterialModule} from './Material/design';
import { FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './login/auth/auth.component';
import { HeaderComponent } from './Admin_side/header/header.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { AddProfilComponent } from './profile/add-profil/add-profil.component';
import { ListeUserComponent } from './user/liste-user/liste-user.component';
import { ListeProfileComponent } from './profile/liste-profile/liste-profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddProfileSortieComponent } from './profileSortie/add-profile-sortie/add-profile-sortie.component';
import { ListeProfileSortieComponent } from './profileSortie/liste-profile-sortie/liste-profile-sortie.component';
import { AddGroupeCompetenceComponent } from './groupe_competence/add-groupe-competence/add-groupe-competence.component';
import { ListeGroupeCompetenceComponent } from './groupe_competence/liste-groupe-competence/liste-groupe-competence.component';
import { ListeCompetenceComponent } from './competence/liste-competence/liste-competence.component';
import { AddCompetenceComponent } from './competence/add-competence/add-competence.component';
import { AddPromosComponent } from './promo/add-promos/add-promos.component';
import { DropdownModule} from 'primeng/dropdown';
import {CardModule} from 'primeng/card';
import {ErrorHelperInterceptor} from './access_database/helper.interceptor';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { ListPromosComponent } from './promo/list-promos/list-promos.component';
import { ListReferentielComponent } from './rerentiel/list-referentiel/list-referentiel.component';




@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    AddUserComponent,
    AddProfilComponent,
    ListeUserComponent,
    ListeProfileComponent,
    AddProfileSortieComponent,
    ListeProfileSortieComponent,
    AddGroupeCompetenceComponent,
    ListeGroupeCompetenceComponent,
    ListeCompetenceComponent,
    AddCompetenceComponent,
    AddPromosComponent,
    ListPromosComponent,
    ListReferentielComponent,
    // mdb
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    DropdownModule,
    CardModule,
    MaterialFileInputModule
  ],
  providers: [ ErrorHelperInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
