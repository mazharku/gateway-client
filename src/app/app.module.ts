import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddPageComponent } from './add-page/add-page.component';
import { DataTableComponent } from './data-table/data-table.component';
import {GatewayServiceService} from './gateway-service.service';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DeviceListComponent } from './device-list/device-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPageComponent,
    DataTableComponent,
    DeviceListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [GatewayServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
