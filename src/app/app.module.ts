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


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    AddUserComponent,
    AddProfilComponent,
    ListeUserComponent,
    ListeProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
