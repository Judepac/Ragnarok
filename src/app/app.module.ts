import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { LoginComponent } from './pages/acceuil/login/login.component';
import { NavbarComponent } from './pages/main/navbar/navbar.component';
import { WelcomeComponent } from './pages/main/welcome/welcome.component';
import { SearchComponent } from './pages/main/search/search.component';
import { MontresComponent } from './pages/montres/montres.component';
import { MapComponent } from './pages/map/map.component';
import { NotesComponent } from './pages/notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    LoginComponent,
    NavbarComponent,
    WelcomeComponent,
    SearchComponent,
    MontresComponent,
    MapComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
