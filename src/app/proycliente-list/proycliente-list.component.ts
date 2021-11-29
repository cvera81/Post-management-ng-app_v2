
import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ProyclienteService} from "../proycliente.service";

import {proycliente} from "../proycliente";

@Component({
  selector: 'app-proycliente-list',
  templateUrl: './proycliente-list.component.html',
  styleUrls: ['./proycliente-list.component.css']
})
export class ProyclienteListComponent implements OnInit {
  proyclientes!:Observable<proycliente[]>;

  constructor(private ProyclienteService: ProyclienteService) { }

  ngOnInit(): void {
    this.reloadDate();
  }
  reloadDate(){

    this.proyclientes=this.ProyclienteService.consultaProyclientes();

  }

}
