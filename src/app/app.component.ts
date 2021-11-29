

import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {cliente} from "./cliente";
import {clienteService} from "./cliente.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  tittle= 'Angular 6 + Spring boot ';
  constructor() {
  }

}
