import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { CreatecabComponent } from './components/cab/createcab/createcab.component';
import { GetallcabsComponent } from './components/cab/getallcabs/getallcabs.component';
import { SearchcabComponent } from './components/cab/searchcab/searchcab.component';
import { UpdatecabComponent } from './components/cab/updatecab/updatecab.component';
import { CreatehotelComponent } from './components/hotel/createhotel/createhotel.component';
import { GetallhotelsComponent } from './components/hotel/getallhotels/getallhotels.component';
import { SearchhotelComponent } from './components/hotel/searchhotel/searchhotel.component';
import { UpdatehotelComponent } from './components/hotel/updatehotel/updatehotel.component';
import { GetallplacesComponent } from './components/place/getallplaces/getallplaces.component';
import { SearchplaceComponent } from './components/place/searchplace/searchplace.component';
import { UpdateplaceComponent } from './components/place/updateplace/updateplace.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CreatecabComponent,
    GetallcabsComponent,
    SearchcabComponent,
    UpdatecabComponent,
    CreatehotelComponent,
    GetallhotelsComponent,
    SearchhotelComponent,
    UpdatehotelComponent,
    GetallplacesComponent,
    SearchplaceComponent,
    UpdateplaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
