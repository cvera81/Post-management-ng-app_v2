
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import {ClienteListComponent} from "./cliente-list/cliente-list.component";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {KpiClienteComponent} from "./kpi-cliente/kpi-cliente.component";
import {proycliente} from "./proycliente";
import {ProyclienteListComponent} from "./proycliente-list/proycliente-list.component";

const routes: Routes = [
  {path:'',redirectTo :'cliente',pathMatch:'full'},
  {path:'clientes',component:ClienteListComponent},
  {path:'kpicliente',component:KpiClienteComponent},
  {path:'proycliente',component :ProyclienteListComponent},
  {path:'add',component :CreateClienteComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
