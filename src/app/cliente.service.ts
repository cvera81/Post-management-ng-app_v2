import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import {cliente} from "./cliente";
import {kpicliente} from  "./kpicliente"
@Injectable({
  providedIn: 'root'
})
export class clienteService {

  private baseUrl = 'http://localhost:8080/post';

  constructor(private http: HttpClient) {
  }

  crearCliente(cliente:object):Observable<Object>{
    return this.http.post(this.baseUrl+'/creacliente', cliente);
    //return this.http.post(`${this.baseUrl}`, cliente);
  }
  consultaclientes(): Observable<cliente []> {
    return  this.http.get<cliente[]>(this.baseUrl+'/listclientes');
  }

  kpiClientes():Observable<kpicliente[]>{
    return  this.http.get<kpicliente[]>(this.baseUrl+'/kpideclientes/');
  }


}
