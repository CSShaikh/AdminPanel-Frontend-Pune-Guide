import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreatecabComponent } from './components/cab/createcab/createcab.component';
import { GetallcabsComponent } from './components/cab/getallcabs/getallcabs.component';
import { SearchcabComponent } from './components/cab/searchcab/searchcab.component';
import { UpdatecabComponent } from './components/cab/updatecab/updatecab.component';
import { CreatehotelComponent } from './components/hotel/createhotel/createhotel.component';
import { SearchhotelComponent } from './components/hotel/searchhotel/searchhotel.component';
import { UpdatehotelComponent } from './components/hotel/updatehotel/updatehotel.component';
import { GetallhotelsComponent } from './components/hotel/getallhotels/getallhotels.component';
import { GetallplacesComponent } from './components/place/getallplaces/getallplaces.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
 // {path:'submit',component:CreatecabComponent},
 { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add', component:CreatecabComponent},
  { path:'search/:id', component:SearchcabComponent},
  { path: 'update/:id', component:UpdatecabComponent},
  { path: 'get' , component:GetallcabsComponent},
  { path:'createHotel', component:CreatehotelComponent},
  { path:'searchHotel/:id', component:SearchhotelComponent},
  { path: 'updateHotel/:id', component:UpdatehotelComponent},
  { path: 'getHotel' , component:GetallhotelsComponent},
  { path: 'getPlace' , component:GetallplacesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
