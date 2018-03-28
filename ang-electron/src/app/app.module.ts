import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NgxElectronModule } from 'ngx-electron';
import { routing, appRoutingProviders } from './app.routing';
import { ClientCreateEditComponent } from './client-create-edit/client-create-edit.component';
import { CreateDeliveryComponent } from './create-delivery/create-delivery.component'

@NgModule({
  declarations: [
    AppComponent,
    ClientCreateEditComponent,
    CreateDeliveryComponent
  ],
  imports: [
    BrowserModule,
    NgxElectronModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
