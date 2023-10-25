import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AdministrationComponent } from './administration/administration.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AddExComponent } from './add-ex/add-ex.component';
import { DeleteExComponent } from './delete-ex/delete-ex.component';
import { UpdateExComponent } from './update-ex/update-ex.component';
import { MuscleComponent } from './muscle/muscle.component';
import { ProposComponent } from './propos/propos.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AdministrationComponent,
    AdminNavComponent,
    AddExComponent,
    DeleteExComponent,
    UpdateExComponent,
    MuscleComponent,
    ProposComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatMenuModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
