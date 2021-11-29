import { Component, OnInit } from '@angular/core';

import {cliente} from "../cliente";
import {kpicliente} from  "../kpicliente"
import {clienteService} from "../cliente.service";
import {observable, Observable} from "rxjs";


@Component({
  selector: 'app-kpi-cliente',
  templateUrl: './kpi-cliente.component.html',
  styleUrls: ['./kpi-cliente.component.css']
})
export class KpiClienteComponent implements OnInit {
  kpiClientes!: Observable<kpicliente[]>;
  //kpiClientes!:kpicliente[];
  kpicliente!: kpicliente;
  //kpiClientes = new Observable<kpicliente[]>();
  constructor(private clienteService: clienteService) { }

  ngOnInit(): void {
     this.reloadDate();
  }
   reloadDate() {
    //this.kpiClientes=this.clienteService.kpiClientes().
   this.clienteService.kpiClientes().subscribe(data=> console.log(data),error=>console.log(error));
   /*
     this.clienteService.kpiClientes().subscribe(data=>{
      console.log(data);
      this.kpiClientes=data
     }
     ,error=>{
     console.log(error)
   });
   */
   //this.kpiClientes.subscribe(data=> console.log(data),error=>console.log(error));

  }

  /*
  *  this.clienteservice.crearCliente(this.cliente)
      .subscribe(data=> console.log(data),error=>console.log(error));
    this.cliente=new cliente();
  * */
}
