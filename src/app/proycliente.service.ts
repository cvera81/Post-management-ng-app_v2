import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {proycliente} from "./proycliente";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProyclienteService {

  private baseUrl = 'http://localhost:8080/post';

  constructor(private http: HttpClient) {
  }
  consultaProyclientes(): Observable<proycliente []> {
    return  this.http.get<proycliente[]>(this.baseUrl+'/listclientes');
  }
}
