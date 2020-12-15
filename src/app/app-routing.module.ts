import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {AddPageComponent} from './add-page/add-page.component'
import { from } from 'rxjs';
import { DataTableComponent } from './data-table/data-table.component';
import { DeviceListComponent } from './device-list/device-list.component';
const routes: Routes = [
  { path: '', redirectTo:"''",pathMatch:"full"},
  { path: '', component: DataTableComponent},
  { path: 'add', component: AddPageComponent},
  { path: 'devices/:gatewayId', component: DeviceListComponent},
  
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
