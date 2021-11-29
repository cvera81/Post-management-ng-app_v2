
import {clienteService} from './../cliente.service';
import { cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent implements OnInit {

  cliente: cliente = new cliente();
  submitted=false;
  constructor(private clienteservice: clienteService) { }

  ngOnInit(): void {
  }

  newcliente():void{
    this.submitted=false;
    this.cliente=new cliente();
  }

  save(){
    this.clienteservice.crearCliente(this.cliente)
      .subscribe(data=> console.log(data),error=>console.log(error));
    this.cliente=new cliente();
  }

  onSubmit(){
    this.submitted=true;
    this.save();
  }

}
