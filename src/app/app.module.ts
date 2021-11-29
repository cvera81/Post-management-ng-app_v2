import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import {FormsModule} from "@angular/forms";
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { KpiClienteComponent } from './kpi-cliente/kpi-cliente.component';
import { ProyclienteListComponent } from './proycliente-list/proycliente-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateClienteComponent,
    ClienteListComponent,
    KpiClienteComponent,
    ProyclienteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


