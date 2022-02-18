import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ChauffeurComponent } from './chauffeur/chauffeur.component';
import { HttpClientModule } from '@angular/common/http';
import { EditChauffeurComponent } from './chauffeur/edit-chauffeur/edit-chauffeur.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ChauffeurComponent,
    EditChauffeurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
