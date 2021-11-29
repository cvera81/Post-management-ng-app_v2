
import {Component, Input, OnInit} from '@angular/core';
import {cliente} from "../cliente";
import {kpicliente} from "../kpicliente"
import {clienteService} from "../cliente.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  clientes!:Observable<cliente[]>;
  //kpiClientes!: Observable<kpicliente[]>;


  constructor(private clienteService: clienteService) { }

  ngOnInit() {
    this.reloadDate();
  }
  reloadDate(){

    this.clientes=this.clienteService.consultaclientes();
//    this.kpiClientes=this.clienteService.kpiClientes();
  }

}
