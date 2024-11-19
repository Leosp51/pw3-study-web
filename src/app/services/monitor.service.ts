import { Monitor } from './../models/monitor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  URL: string = "http://localhost:8080/monitores";
  constructor(private httpCliente:HttpClient) {}

  inserir(monitor:Monitor):Observable<Monitor>{
    return this.httpCliente.post<Monitor>(this.URL,monitor)
  };
  buscarMonitores():Observable<Monitor[]>{
    return this.httpCliente.get<Monitor[]>(this.URL);
  }

}
